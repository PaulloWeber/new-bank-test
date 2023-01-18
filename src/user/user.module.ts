import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { EmailIsUniqueValidator } from './validators/email.validator'
import { CpfIsUniqueValidator } from './validators/cpf.validator'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService, EmailIsUniqueValidator, CpfIsUniqueValidator]
})
export class UserModule {}
