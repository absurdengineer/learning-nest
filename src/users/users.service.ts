import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/core/constants';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USERS_REPOSITORY) private usersRespository: typeof User,
  ) {}

  async findAll() {
    return await this.usersRespository.findAll();
  }
}
