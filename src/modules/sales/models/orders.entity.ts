import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Party } from "../../parties/models/party.entity";
import { User } from "../../users/models/user.entity";


@Entity("orders")
export class Order {
 @PrimaryGeneratedColumn()
 id!: number;

 @ManyToOne(() => Party, { nullable: false })
 party!: Party;

 @ManyToOne(() => User, { nullable: false })
 user!: User;
 
 @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
 order_date!: string;

 @Column({ type: 'text', default: () => 'pending' })
 status!: string;

 @Column({ nullable: false, type: 'decimal', precision: 12, scale: 2 })
 total_amount!: number;

}
