import { Controller, Get } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<{ data: User[]; message: string }> {
    const users = await this.usersService.findAll();
    return { data: users, message: 'Users retrieved successfully.' };
  }
}
