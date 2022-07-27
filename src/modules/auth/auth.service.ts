import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/core/constants';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USERS_REPOSITORY) private usersRespository: typeof User,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRespository.create(createUserDto);
  }
}
