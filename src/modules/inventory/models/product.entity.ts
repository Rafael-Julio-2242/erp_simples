import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('products')
export class Product {
 @PrimaryGeneratedColumn()
 id!: number;

 @Column({ nullable: false })
 name!: string;

 @Column({ nullable: true })
 description?: string;

 @Column({ nullable: false, unique: true })
 sku!: string;
 
 @Column({ nullable: false, type: 'decimal', precision: 12, scale: 2 })
 price!: number;
 
}
