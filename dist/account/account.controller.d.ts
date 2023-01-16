import { AccountService } from './account.service';
import { CreateAccountDto, DischargeAccountDto, RechargeAccountDto } from './dto/_index';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(createAccountDto: CreateAccountDto): Promise<import("../utils/data.handler").default>;
    findByCpf(cpf: string): Promise<import("../utils/data.handler").default>;
    recharge(id: number, rechargeAccountDto: RechargeAccountDto): Promise<import("../utils/data.handler").default>;
    discharge(id: number, dischargeAccountDto: DischargeAccountDto): Promise<import("../utils/data.handler").default>;
}
