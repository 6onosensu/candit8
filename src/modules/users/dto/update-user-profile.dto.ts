import { 
  IsOptional, 
  IsString, 
  MinLength, 
  MaxLength,
  Matches,
  IsDateString,
} from 'class-validator';

export class UpdateUserProfileDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  firstName?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  lastName?: string;

  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  secondLastName?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\+\d{1,4}$/)
  phoneCode?: string;

  @IsOptional()
  @IsString()
  @Matches(/^\d{4,15}$/)
  phone?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string;
}