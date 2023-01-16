import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export class CreateAccountDto extends PartialType(CreateUserDto) {
  @IsNotEmpty({ message: 'CPF não pode ser vazio' })
  cpf: string;
}
