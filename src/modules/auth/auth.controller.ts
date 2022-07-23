import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signUp(): string {
    return 'This route is for SignUp.';
  }

  @Post('login')
  login(): string {
    return 'This route is for Login.';
  }
}
