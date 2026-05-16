import { 
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional, 
  IsString, 
  Matches, 
  MaxLength, 
  MinLength 
} from "class-validator";
import { SignupRole } from 'src/common/enums/signup-role.enum';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  firstName: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
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
  @MinLength(8)
  @MaxLength(72)
  password: string;

  @IsString()
  @Matches(/^\+\d{1,4}$/, { 
    message: 'phoneCode must be start with + and have 1-4 digits' 
  })
  phoneCode: string;

  @IsString()
  @Matches(/^\d{4,15}$/, { 
    message: 'phone must be 4-15 digits' 
  })
  phone: string;

  @IsDateString()
  birthDate: string;

  @IsEnum(SignupRole)
  role: SignupRole;
}