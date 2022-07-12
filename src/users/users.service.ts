import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/core/constants';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY) private usersRespository: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRespository.findAll();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRespository.create(createUserDto);
  }
}
