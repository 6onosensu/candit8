import { IsEmail, MaxLength } from 'class-validator';

export class ChangeEmailDto {
  @IsEmail()
  @MaxLength(100)
  email: string;
}