import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { Reason } from "../enums/reason.enum";


@Entity("inventory-transactions")
export class InventoryTransaction {
 @PrimaryGeneratedColumn()
 id!: number;

 @ManyToOne(() => Product)
 product!: Product;

 @Column({ nullable: false })
 change!: number;

 @Column({
  type: 'enum',
  enum: Reason
 })
 reason!: Reason;

 @CreateDateColumn({ name: 'created_at' })
 createdAt!: Date;
 
}