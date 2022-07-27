import { Module } from '@nestjs/common';
import { usersProviders } from '../users/users.providers';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ...usersProviders],
})
export class AuthModule {}
