import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/models/user.entity';

@Entity("cashflows")
export class CashFlow {
 @PrimaryGeneratedColumn()
 id!: number;

 @ManyToOne(() => User)
 user!: User;

 @Column('date', { nullable: false })
 date!: string;

 @Column()
 type!: 'in' | 'out';

 @Column('decimal', { precision: 12, scale: 2 })
 amount!: number;

 @Column({ nullable: false })
 description!: string;

 @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
 createdAt!: Date;
}
