import { User } from '../../user/entities/user.entity';
import { ColumnNumericTransformer } from '../../utils/column-numeric-transformer';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 50 })
  agency: string;

  @Column({ length: 50 })
  number: string;

  @Column({
    type: 'decimal',
    scale: 2,
    default: 0,
    transformer: new ColumnNumericTransformer(),
  })
  balance: number;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  constructor(account?: Partial<Account>) {
    this.id = account?.id;
    this.agency = account?.agency;
    this.number = account?.number;
    this.user = account?.user;
  }
}
