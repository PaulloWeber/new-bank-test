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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const account_entity_1 = require("../../account/entities/account.entity");
const typeorm_1 = require("typeorm");
let User = class User {
    constructor(user) {
        this.cpf = user === null || user === void 0 ? void 0 : user.cpf;
        this.name = user === null || user === void 0 ? void 0 : user.name;
        this.email = user === null || user === void 0 ? void 0 : user.email;
        this.phone = user === null || user === void 0 ? void 0 : user.phone;
        this.address = user === null || user === void 0 ? void 0 : user.address;
        this.accounts = user === null || user === void 0 ? void 0 : user.accounts;
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ length: 20 }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 30 }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, length: 100 }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => account_entity_1.Account, (account) => account.user, { cascade: true }),
    __metadata("design:type", Array)
], User.prototype, "accounts", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map