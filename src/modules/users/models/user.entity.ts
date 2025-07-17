import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserModule } from './user_module.entity';

@Entity("users")
export class User {
 @PrimaryGeneratedColumn()
 id!: number;

 @Column({ nullable: false })
 name!: string;

 @Column({ unique: true, nullable: false })
 email!: string;

 @Column({ nullable: false })
 password!: string;

 @OneToMany(() => UserModule, um => um.user)
userModules!: UserModule[];

 @Column({ nullable: false, default: false }) 
 isAdmin!: boolean
}

