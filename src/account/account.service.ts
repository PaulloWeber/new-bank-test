import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import DataHandler from '../utils/data.handler';
import { generateAccountNumber, Messages } from '../utils/utils';
import { Repository } from 'typeorm';
import {
  CreateAccountDto,
  DischargeAccountDto,
  RechargeAccountDto,
} from './dto/_index';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    private userService: UserService,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    try {
      const account = new Account();
      const user = (await this.userService.findByCPF(createAccountDto.cpf))
        .content;
      if (!user) throw new Error();

      account.agency = '001';
      account.number = generateAccountNumber(10);
      account.user = user;

      const response = await this.accountRepository.save(account);
      return new DataHandler(
        HttpStatus.OK,
        Messages.SUCESS_CREATE_ACCOUNT,
        response,
      );
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: Messages.ERROR_CREATE_ACCOUNT,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findByCpf(cpf: string) {
    try {
      const response = await this.accountRepository
        .createQueryBuilder('account')
        .where('user.cpf = :cpf', { cpf })
        .innerJoin('account.user', 'user')
        .getMany();

      return new DataHandler(
        HttpStatus.OK,
        Messages.SUCESS_FIND_ACCOUNT,
        response,
      );
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: Messages.ERROR_FIND_ACCOUNT,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async recharge(id: number, rechargeAccountDto: RechargeAccountDto) {
    try {
      const account = await this.accountRepository.findOneBy({ id });

      account.balance += rechargeAccountDto.balance;
      account.balance = parseFloat(account.balance.toFixed(2));

      await this.update(id, account);

      return new DataHandler(HttpStatus.OK, Messages.SUCESS_RECHARGE, {});
    } catch (e) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: Messages.ERROR_RECHARGE,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async discharge(id: number, dischargeAccountDto: DischargeAccountDto) {
    try {
      const account = await this.accountRepository.findOneBy({ id });
      account.balance -= dischargeAccountDto.balance;
      account.balance = parseFloat(account.balance.toFixed(2));
      const response = await this.update(id, account);
      return new DataHandler(
        HttpStatus.OK,
        Messages.SUCESS_DISCHARGE,
        response,
      );
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: Messages.ERROR_DISCHARGE,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: number, account: Account) {
    return await this.accountRepository
      .createQueryBuilder()
      .update(Account)
      .set(account)
      .where('id = :id', { id })
      .execute();
  }
}
