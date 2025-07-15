import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity("modules")
export class Module {
 @PrimaryGeneratedColumn()
 id!: number;

 @Column({ unique: true, nullable: false })
 name!: string;

 @ManyToMany(() => User, (user) => user.modules)
 users!: User[];
}