export class CreateUserDto {
  firstName: string;
  lastName: string;
  secondLastName?: string;
  email: string;
  password: string;
  phoneCode?: string;
  phone?: number;
  age?: number;
}