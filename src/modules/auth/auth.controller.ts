import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(
    @Body() createUserDto: CreateUserDto,
  ): Promise<{ data: User; message: string }> {
    const user = await this.authService.signUp(createUserDto);
    return { data: user, message: 'Sign up Successfully.' };
  }

  @Post('login')
  login(): string {
    return 'This route is for Login.';
  }
}
