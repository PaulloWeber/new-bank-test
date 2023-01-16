import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { AccountService } from './account.service';
import {
  CreateAccountDto,
  DischargeAccountDto,
  RechargeAccountDto,
} from './dto/_index';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto) {
    return await this.accountService.create(createAccountDto);
  }

  @Get(':cpf')
  async findByCpf(@Param('cpf') cpf: string) {
    return await this.accountService.findByCpf(cpf);
  }

  @Patch('recharge/:id')
  async recharge(
    @Param('id') id: number,
    @Body() rechargeAccountDto: RechargeAccountDto,
  ) {
    return await this.accountService.recharge(id, rechargeAccountDto);
  }

  @Patch('discharge/:id')
  async discharge(
    @Param('id') id: number,
    @Body() dischargeAccountDto: DischargeAccountDto,
  ) {
    return await this.accountService.discharge(id, dischargeAccountDto);
  }
}
