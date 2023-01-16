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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const cpf_validator_1 = require("../validators/cpf.validator");
const email_validator_1 = require("../validators/email.validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome do cliente não pode ser vazio' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'CPF não pode ser vazio' }),
    (0, cpf_validator_1.CpfIsUnique)({ message: 'Já existe um usuário com este CPF' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Telefone não pode ser vazio' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Endereço não pode ser vazio' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email não pode ser vazio' }),
    (0, class_validator_1.IsEmail)(undefined, { message: 'O e-mail informado é inválido' }),
    (0, email_validator_1.EmailIsUnique)({ message: 'Já existe um usuário com este e-mail' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map