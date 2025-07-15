import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CashFlow } from "./cashflow.entity";


@Entity("bank_reconciliations")
export class BankReconciliation {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne(() => CashFlow)
  cashFlow!: CashFlow;

  @Column('boolean',{ name: 'reconciled' ,nullable: false })
  reconciled!: boolean;

  @Column({ name: 'reconciled_at', type: 'timestamp', nullable: true })
  reconciledAt?: Date;

}

