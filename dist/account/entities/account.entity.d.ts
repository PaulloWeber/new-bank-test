import { User } from '../../user/entities/user.entity';
export declare class Account {
    id: number;
    agency: string;
    number: string;
    balance: number;
    user: User;
    constructor(account?: Partial<Account>);
}
