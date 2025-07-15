import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";


@Entity('inventory')
export class Inventory {
 @PrimaryGeneratedColumn()
 id!: number;

 @ManyToOne(() => Product)
 product!: Product;

 @Column({ nullable: false })
 quantity!: number;

 @Column({ nullable: false })
 reorder_level!: number;
}
