import { IsString, IsEmail, Matches } from 'class-validator';
import { Match } from '../match.decorator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly username: string;

  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @Matches(/^[a-zA-Z0-9]{6,}$/, {
    message: 'password must be 6 character long alphanumeric',
  })
  readonly password: string;

  @IsString()
  @Match('password', { message: "Password and Confirm Password didn't match" })
  readonly confirmPassword: string;
}
