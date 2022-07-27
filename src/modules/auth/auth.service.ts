import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from 'src/core/constants';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USERS_REPOSITORY) private usersRespository: typeof User,
  ) {}

  async signUp(createUserDto: CreateUserDto): Promise<User> {
    let count: number = await this.usersRespository.count({
      where: { username: createUserDto.username },
    });
    if (count > 0)
      throw new HttpException('Username is taken', HttpStatus.BAD_REQUEST);
    count = await this.usersRespository.count({
      where: { email: createUserDto.email },
    });
    if (count > 0)
      throw new HttpException(
        'Provided email is already in use',
        HttpStatus.BAD_REQUEST,
      );
    const user = await this.usersRespository.create(createUserDto);
    return user;
  }
}
