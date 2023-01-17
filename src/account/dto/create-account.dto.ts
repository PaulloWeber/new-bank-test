import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from '../../user/dto/create-user.dto';

export class CreateAccountDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsNotEmpty({ message: 'CPF não pode ser vazio' })
  cpf: string;
}
