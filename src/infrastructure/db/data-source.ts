import "reflect-metadata";
import { DataSource } from "typeorm";
import { Enviroment } from "../../shared/helpers/enviroment";
import { CashFlow } from "../../modules/finance/models/cashflow.entity";
import { BankReconciliation } from "../../modules/finance/models/bank-reconciliations.entity";
import { Inventory } from "../../modules/inventory/models/inventory.entity";
import { Product } from "../../modules/inventory/models/product.entity";
import { InventoryTransaction } from "../../modules/inventory/models/inventory-transaction.entity";
import { Party } from "../../modules/parties/models/party.entity";
import { Order } from "../../modules/sales/models/orders.entity";
import { OrderItem } from "../../modules/sales/models/order-item.entity";
import { User } from "../../modules/users/models/user.entity";
import { UserModule } from "../../modules/users/models/user_module.entity";
import { Module } from "../../modules/users/models/module.entity";

const env = new Enviroment();

const CentralDataSource = new DataSource({
 type: "postgres",
 host: env.DB_HOST,
 port: Number(env.DB_PORT),
 username: env.DB_USERNAME,
 password: env.DB_PASSWORD,
 database: env.DB_DATABASE,
 synchronize: true, // process.env.NODE_ENV === 'dev',
 logging: false,
 entities: [
  CashFlow,
  BankReconciliation,
  Inventory,
  Product,
  InventoryTransaction,
  Party,
  Order,
  OrderItem,
  Module,
  User,
  UserModule
 ]
});

let CentralConnection: null | DataSource = null;

export const getCentralDbConnection = async () => {
 if (!CentralConnection) {
  CentralConnection = await CentralDataSource.initialize();
 }
 return CentralConnection;
}

export const closeCentralDbConnection = async () => {
 if (CentralConnection) {
  await CentralConnection.destroy();
  CentralConnection = null;
 }
}
