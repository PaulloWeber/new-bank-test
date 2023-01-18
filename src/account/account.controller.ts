import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'
import DataHandler from '../utils/data.handler'
import { AccountService } from './account.service'
import {
  CreateAccountDto,
  DischargeAccountDto,
  RechargeAccountDto
} from './dto/_index'

@ApiTags('acount')
@Controller('account')
export class AccountController {
  constructor (private readonly accountService: AccountService) {}

  @Post()
  @ApiBody({
    description: 'Create Account',
    type: CreateAccountDto
  })
  @ApiOperation({ summary: 'Create Account' })
  async create (@Body() createAccountDto: CreateAccountDto): Promise<DataHandler> {
    return await this.accountService.create(createAccountDto)
  }

  @Get(':cpf')
  @ApiOperation({ summary: 'Find Account By CPF' })
  async findByCpf (@Param('cpf') cpf: string): Promise<DataHandler> {
    return await this.accountService.findByCpf(cpf)
  }

  @Patch('recharge/:id')
  @ApiBody({
    description: 'Recharge Account',
    type: RechargeAccountDto
  })
  @ApiOperation({ summary: 'Recharge Account' })
  async recharge (
    @Param('id') id: number,
      @Body() rechargeAccountDto: RechargeAccountDto
  ): Promise<DataHandler> {
    return await this.accountService.recharge(id, rechargeAccountDto)
  }

  @Patch('discharge/:id')
  @ApiBody({
    description: 'Discharge Account',
    type: DischargeAccountDto
  })
  @ApiOperation({ summary: 'Discharge Account' })
  async discharge (
    @Param('id') id: number,
      @Body() dischargeAccountDto: DischargeAccountDto
  ): Promise<DataHandler> {
    return await this.accountService.discharge(id, dischargeAccountDto)
  }
}
