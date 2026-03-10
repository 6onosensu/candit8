import { 
  IsEmail, IsInt, IsOptional, 
  IsString, Matches, Max, 
  MaxLength, Min, MinLength 
} from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  firstName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  lastName: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  secondLastName?: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password: string;

  @IsOptional()
  @IsString()
  @Matches(/^\+\d{1,4}$/, { message: 'phoneCode must be start with + and have 1-3 digits' })
  phoneCode?: string;

  @IsOptional()
  @Matches(/^\d{4,15}$/, { message: 'phone must be 4-15 digits' })
  phone?: string;

  @IsOptional()
  @IsInt()
  @Min(14)
  @Max(110)
  age?: number;
}