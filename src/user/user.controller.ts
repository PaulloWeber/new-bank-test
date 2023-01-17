import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({
    description: 'Create user',
    type: CreateUserDto,
  })
  @ApiOperation({ summary: 'Create User' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get('cpf/:cpf')
  @ApiOperation({ summary: 'Find User By CPF' })
  async findByCpf(@Param('cpf') cpf: string) {
    return await this.userService.findByCPF(cpf);
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'Find User By Email' })
  async findByEmail(@Param('email') cpf: string) {
    return await this.userService.findByEmail(cpf);
  }
}
