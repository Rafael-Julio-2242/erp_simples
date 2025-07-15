import { Check, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./orders.entity";
import { Product } from "../../inventory/models/product.entity";


@Entity("order_items")
@Check(`"quantity > 0"`)
export class OrderItem {
 @PrimaryGeneratedColumn()
 id!: number;

 @ManyToOne(() => Order, { nullable: false })
 order!: Order;

 @ManyToOne(() => Product, { nullable: false })
 product!: Product;

 @Column({ nullable: false })
 quantity!: number;

 @Column({ nullable: false })
 unit_price!: number;
}
