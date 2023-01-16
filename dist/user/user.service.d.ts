import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import DataHandler from '../utils/data.handler';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<DataHandler>;
    findByEmail(email: string): Promise<DataHandler>;
    findByCPF(cpf: string): Promise<DataHandler>;
}
