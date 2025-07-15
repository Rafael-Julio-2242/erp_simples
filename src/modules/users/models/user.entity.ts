import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Module } from './module.entity';

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

 @ManyToMany(() => Module, (module) => module.users, { cascade: true })
 @JoinTable({
  name: 'user_modules',
  joinColumn: { name: "user_id", referencedColumnName: "id" },
  inverseJoinColumn: { name: "module_id", referencedColumnName: "id" }
 })
 modules!: Module[]
}

