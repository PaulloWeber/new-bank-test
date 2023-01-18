/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { Repository } from 'typeorm'

import { User } from './entities/user.entity'
import { Account } from '../account/entities/account.entity'
import { generateAccountNumber, Messages } from '../utils/utils'
import DataHandler from '../utils/data.handler'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create (createUserDto: CreateUserDto): Promise<DataHandler> {
    try {
      const user = new User()
      const account = new Account()

      account.agency = '0001'
      account.number = generateAccountNumber(10)

      user.name = createUserDto.name
      user.cpf = createUserDto.cpf
      user.address = createUserDto.address
      user.email = createUserDto.email
      user.phone = createUserDto.phone
      user.accounts = []
      user.accounts.push(account)

      const response = await this.usersRepository.save(user)
      return new DataHandler(
        HttpStatus.OK,
        Messages.SUCESS_CREATE_USER,
        response
      )
    } catch (e) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: e.response.error || Messages.ERROR_CREATE_USER
        },
        HttpStatus.BAD_REQUEST
      )
    }
  }

  async findByEmail (email: string): Promise<DataHandler> {
    try {
      const response = await this.usersRepository.findOneBy({ email })

      return new DataHandler(
        HttpStatus.OK,
        Messages.SUCESS_FIND_USER,
        response
      )
    } catch (e) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: e.response.error || Messages.ERROR_FIND_USER
        },
        HttpStatus.BAD_REQUEST
      )
    }
  }

  async findByCPF (cpf: string): Promise<DataHandler> {
    try {
      const response = await this.usersRepository.findOneBy({ cpf })

      return new DataHandler(
        HttpStatus.OK,
        Messages.SUCESS_FIND_USER,
        response
      )
    } catch (e) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error: e.response.error || Messages.ERROR_FIND_USER
        },
        HttpStatus.BAD_REQUEST
      )
    }
  }
}
