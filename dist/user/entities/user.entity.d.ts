import { Account } from '../../account/entities/account.entity';
export declare class User {
    cpf: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    accounts: Account[];
    constructor(user?: Partial<User>);
}
