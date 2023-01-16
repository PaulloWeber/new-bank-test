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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const account_entity_1 = require("../account/entities/account.entity");
const utils_1 = require("../utils/utils");
const data_handler_1 = require("../utils/data.handler");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        try {
            const user = new user_entity_1.User();
            const account = new account_entity_1.Account();
            account.agency = '0001';
            account.number = (0, utils_1.generateAccountNumber)(10);
            user.name = createUserDto.name;
            user.cpf = createUserDto.cpf;
            user.address = createUserDto.address;
            user.email = createUserDto.email;
            user.phone = createUserDto.phone;
            user.accounts = [];
            user.accounts.push(account);
            const response = await this.usersRepository.save(user);
            return new data_handler_1.default(common_1.HttpStatus.OK, utils_1.Messages.SUCESS_CREATE_USER, response);
        }
        catch (error) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: utils_1.Messages.ERROR_CREATE_USER,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByEmail(email) {
        try {
            const response = await this.usersRepository.findOneBy({ email });
            return new data_handler_1.default(common_1.HttpStatus.OK, utils_1.Messages.SUCESS_FIND_USER, response);
        }
        catch (error) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: utils_1.Messages.ERROR_FIND_USER,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByCPF(cpf) {
        try {
            const response = await this.usersRepository.findOneBy({ cpf });
            return new data_handler_1.default(common_1.HttpStatus.OK, utils_1.Messages.SUCESS_FIND_USER, response);
        }
        catch (error) {
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                error: utils_1.Messages.ERROR_FIND_USER,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map