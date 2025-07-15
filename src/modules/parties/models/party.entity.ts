import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PartyType } from "../enums/party-type.enum"; 

@Entity("parties")
export class Party {
 @PrimaryGeneratedColumn()
 id!: number;

 @Column({
  type: 'enum',
  enum: PartyType
 })
 type!: PartyType;

 @Column({ length: 255, nullable: false })
 name!: string;

 @Column({ unique: true, length: 255 })
 email?: string;

 @Column({ length: 50 })
 phone!: string;
 
 @Column({ type: 'text' })
 address!: string;

 @CreateDateColumn({ name: 'created_at' })
 createdAt!: Date;

 @UpdateDateColumn({ name: 'updated_at' })
 updatedAt!: Date;

}
