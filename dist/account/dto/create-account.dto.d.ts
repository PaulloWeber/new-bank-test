import { CreateUserDto } from '../../user/dto/create-user.dto';
declare const CreateAccountDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class CreateAccountDto extends CreateAccountDto_base {
    cpf: string;
}
export {};
