import { Account } from '../../account/entities/account.entity'
import { Entity, Column, OneToMany, PrimaryColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryColumn({ length: 20 })
    cpf: string

  @Column({ length: 100 })
    name: string

  @Column({ length: 150, unique: true })
    email: string

  @Column({ nullable: true, length: 30 })
    phone: string

  @Column({ nullable: true, length: 100 })
    address: string

  @OneToMany(() => Account, (account) => account.user, { cascade: true })
    accounts: Account[]

  constructor (user?: Partial<User>) {
    this.cpf = user?.cpf
    this.name = user?.name
    this.email = user?.email
    this.phone = user?.phone
    this.address = user?.address
    this.accounts = user?.accounts
  }
}
