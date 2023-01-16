import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from '../account.controller';
import { AccountService } from '../account.service';
import { CreateAccountDto } from '../dto/create-account.dto';
import { RechargeAccountDto } from '../dto/recharge-account-dto';
import { Account } from '../entities/account.entity';

const account: Account = new Account({
  agency: '123123',
  number: 'paulo@paulo',
});
describe('AccountController', () => {
  let accountController: AccountController;
  let accountService: AccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: AccountService,
          useValue: {
            create: jest.fn().mockResolvedValue(account),
            findByCpf: jest.fn().mockResolvedValue(account),
            recharge: jest.fn().mockResolvedValue(account),
            discharge: jest.fn().mockResolvedValue(account),
          },
        },
      ],
      controllers: [AccountController],
    }).compile();

    accountController = module.get<AccountController>(AccountController);
    accountService = module.get<AccountService>(AccountService);
  });

  it('it should be defined', () => {
    expect(accountController).toBeDefined();
    expect(accountService).toBeDefined();
  });

  describe('account', () => {
    it('should create account', async () => {
      const result = await accountController.create(new CreateAccountDto());
      expect(result).toEqual(account);
    });

    it('should find account by cpf', async () => {
      const result = await accountController.findByCpf('123123');
      expect(result).toEqual(account);
    });

    it('should recharge account', async () => {
      const result = await accountController.recharge(
        123123,
        new RechargeAccountDto(),
      );
      expect(result).toEqual(account);
    });

    it('should discharge account', async () => {
      const result = await accountController.discharge(
        123123,
        new RechargeAccountDto(),
      );
      expect(result).toEqual(account);
    });
  });
});
