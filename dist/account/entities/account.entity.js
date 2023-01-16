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
exports.Account = void 0;
const user_entity_1 = require("../../user/entities/user.entity");
const column_numeric_transformer_1 = require("../../utils/column-numeric-transformer");
const typeorm_1 = require("typeorm");
let Account = class Account {
    constructor(account) {
        this.id = account === null || account === void 0 ? void 0 : account.id;
        this.agency = account === null || account === void 0 ? void 0 : account.agency;
        this.number = account === null || account === void 0 ? void 0 : account.number;
        this.user = account === null || account === void 0 ? void 0 : account.user;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Account.prototype, "agency", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Account.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        scale: 2,
        default: 0,
        transformer: new column_numeric_transformer_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], Account.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.accounts),
    __metadata("design:type", user_entity_1.User)
], Account.prototype, "user", void 0);
Account = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Account);
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map