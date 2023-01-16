import { UserService } from '../user/user.service';
import DataHandler from '../utils/data.handler';
import { Repository } from 'typeorm';
import { CreateAccountDto, DischargeAccountDto, RechargeAccountDto } from './dto/_index';
import { Account } from './entities/account.entity';
export declare class AccountService {
    private accountRepository;
    private userService;
    constructor(accountRepository: Repository<Account>, userService: UserService);
    create(createAccountDto: CreateAccountDto): Promise<DataHandler>;
    findByCpf(cpf: string): Promise<DataHandler>;
    recharge(id: number, rechargeAccountDto: RechargeAccountDto): Promise<DataHandler>;
    discharge(id: number, dischargeAccountDto: DischargeAccountDto): Promise<DataHandler>;
    update(id: number, account: Account): Promise<import("typeorm").UpdateResult>;
}
