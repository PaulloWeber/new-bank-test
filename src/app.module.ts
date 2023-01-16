import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'bancodedados',
      database: 'new-bank',
      entities: [User, Account],
      synchronize: true,
    }),
    UserModule,
    AccountModule,
  ],
})
export class AppModule {}
