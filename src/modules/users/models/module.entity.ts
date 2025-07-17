import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserModule } from "./user_module.entity";


@Entity("modules")
export class Module {
 @PrimaryGeneratedColumn()
 id!: number;

 @Column({ unique: true, nullable: false })
 name!: string;

 @OneToMany(() => UserModule, um => um.module)
 userModules!: UserModule[];
}