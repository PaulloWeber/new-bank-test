"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const data_handler_1 = require("../utils/data.handler");
const utils_1 = require("../utils/utils");
const typeorm_2 = require("typeorm");
const account_entity_1 = require("./entities/account.entity");
let AccountService = class AccountService {
    constructor(accountRepository, userService) {
        this.accountRepository = accountRepository;
        this.userService = userService;
    }
    async create(createAccountDto) {
        try {
            const account = new account_entity_1.Account();
            const user = (await this.userService.findByCPF(createAccountDto.cpf))
                .content;
            if (!user)
                throw new Error();
            account.agency = '001';
            account.number = (0, utils_1.generateAccountNumber)(10);
            account.user = user;
            const response = await this.accountRepository.save(account);
            return new data_handler_1.default(common_1.HttpStatus.OK, utils_1.Messages.SUCESS_CREATE_ACCOUNT, response);
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: e.response.error || utils_1.Messages.ERROR_CREATE_ACCOUNT,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByCpf(cpf) {
        try {
            const response = await this.accountRepository
                .createQueryBuilder('account')
                .where('user.cpf = :cpf', { cpf })
                .innerJoin('account.user', 'user')
                .getMany();
            return new data_handler_1.default(common_1.HttpStatus.OK, utils_1.Messages.SUCESS_FIND_ACCOUNT, response);
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: e.response.error || utils_1.Messages.ERROR_FIND_ACCOUNT,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async recharge(id, rechargeAccountDto) {
        try {
            const account = await this.accountRepository.findOneBy({ id });
            account.balance += rechargeAccountDto.balance;
            account.balance = parseFloat(account.balance.toFixed(2));
            await this.update(id, account);
            return new data_handler_1.default(common_1.HttpStatus.OK, utils_1.Messages.SUCESS_RECHARGE, {});
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: e.response.error || utils_1.Messages.ERROR_RECHARGE,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async discharge(id, dischargeAccountDto) {
        try {
            const account = await this.accountRepository.findOneBy({ id });
            if (account.balance < dischargeAccountDto.balance) {
                throw new common_1.HttpException({
                    error: utils_1.Messages.ERROR_DISCHARGE_BALANCE,
                }, common_1.HttpStatus.BAD_REQUEST);
            }
            account.balance -= dischargeAccountDto.balance;
            account.balance = parseFloat(account.balance.toFixed(2));
            const response = await this.update(id, account);
            return new data_handler_1.default(common_1.HttpStatus.OK, utils_1.Messages.SUCESS_DISCHARGE, response);
        }
        catch (e) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: e.response.error || utils_1.Messages.ERROR_DISCHARGE,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, account) {
        return await this.accountRepository
            .createQueryBuilder()
            .update(account_entity_1.Account)
            .set(account)
            .where('id = :id', { id })
            .execute();
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(account_entity_1.Account)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map