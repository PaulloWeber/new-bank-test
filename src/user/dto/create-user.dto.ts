import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { CpfIsUnique } from '../validators/cpf.validator';
import { EmailIsUnique } from '../validators/email.validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome do cliente não pode ser vazio' })
  name: string;

  @IsNotEmpty({ message: 'CPF não pode ser vazio' })
  @CpfIsUnique({ message: 'Já existe um usuário com este CPF' })
  cpf: string;

  @IsNotEmpty({ message: 'Telefone não pode ser vazio' })
  phone: string;

  @IsNotEmpty({ message: 'Endereço não pode ser vazio' })
  address: string;

  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailIsUnique({ message: 'Já existe um usuário com este e-mail' })
  email: string;
}
