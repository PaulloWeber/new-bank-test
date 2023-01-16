import { HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';

const user: User = new User({
  cpf: '123123',
  email: 'paulo@paulo',
});
describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            save: jest.fn().mockResolvedValue(user),
            findOneBy: jest.fn().mockResolvedValue(user),
          },
        },
      ],
      controllers: [UserController],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('it should be defined', () => {
    expect(userController).toBeDefined();
    expect(userService).toBeDefined();
  });

  describe('create user', () => {
    it('should create user', async () => {
      const result = await userService.create(new CreateUserDto());
      expect(result.status).toEqual(HttpStatus.OK);
    });

    it('should find user by email', async () => {
      const result = await userService.findByEmail('paulloweber@gmail.com');
      expect(result.status).toEqual(HttpStatus.OK);
    });

    it('should find user by cpf', async () => {
      const result = await userService.findByCPF('129038123');
      expect(result.status).toEqual(HttpStatus.OK);
    });
  });

  describe('find user by email', () => {
    it('should find user by email', async () => {
      const result = await userService.findByEmail('paulloweber@gmail.com');
      expect(result.status).toEqual(HttpStatus.OK);
    });
  });
});
