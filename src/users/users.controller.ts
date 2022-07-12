import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ data: User; message: string }> {
    const user = await this.usersService.create(createUserDto);
    return { data: user, message: 'User created successfully.' };
  }
}
