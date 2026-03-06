import { Injectable } from '@nestjs/common';
import { User, UserRole } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    return [];
  }

  async findOne(id: string): Promise<User> {
    return { id } as User;
  }

  async create(dto: CreateUserDto): Promise<User> {
    return { ...dto, role: UserRole.DEVELOPER, isActive: true } as User;
  }

  async patch(id: string, dto: UpdateUserDto): Promise<User> {
    return { ...dto, id } as User;
  } 

  async delete(id: string): Promise<void>{
    return;
  }
}
