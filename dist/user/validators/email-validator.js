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
exports.EmailIsUnique = exports.EmailIsUniqueValidator = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const user_service_1 = require("../user.service");
let EmailIsUniqueValidator = class EmailIsUniqueValidator {
    constructor(userService) {
        this.userService = userService;
    }
    async validate(value) {
        return !(await this.userService.findByEmail(value));
    }
};
EmailIsUniqueValidator = __decorate([
    (0, common_1.Injectable)(),
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], EmailIsUniqueValidator);
exports.EmailIsUniqueValidator = EmailIsUniqueValidator;
const EmailIsUnique = (validationOptions) => {
    return (object, property) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: property,
            options: validationOptions,
            constraints: [],
            validator: EmailIsUniqueValidator,
        });
    };
};
exports.EmailIsUnique = EmailIsUnique;
//# sourceMappingURL=email-validator.js.map