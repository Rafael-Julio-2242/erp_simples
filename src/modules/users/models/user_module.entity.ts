import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./user.entity";
import { Module } from "./module.entity";

@Entity("user_modules")
export class UserModule {
 @PrimaryColumn('integer', { name: "user_id" })
 userId!: number;

 @PrimaryColumn('integer', { name: "module_id" })
 moduleId!: number;
 
 @Column('boolean', { name: "is_admin" })
 isAdmin!: boolean;

 @ManyToOne(() => User, user => user.userModules, { onDelete: 'CASCADE' })
 @JoinColumn({ name: 'user_id' })
 user!: User;

 @ManyToOne(() => Module, mod => mod.userModules, { onDelete: 'CASCADE' })
 @JoinColumn({ name: 'module_id' })
 module!: Module;

}

