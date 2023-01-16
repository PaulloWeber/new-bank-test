import { IsNotEmpty, IsNumber } from 'class-validator';

export class DischargeAccountDto {
  @IsNumber(undefined, { message: 'O valor deve ser um número.' })
  @IsNotEmpty({ message: 'Valor não pode ser vazio' })
  balance: number;
}
