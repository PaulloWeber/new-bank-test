import { Account } from 'src/account/entities/account.entity';
export declare class Transaction {
    id: number;
    type: string;
    value: number;
    originAccount: Account;
    accountDestionation: Account;
}
