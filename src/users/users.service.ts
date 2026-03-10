import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from 'src/common/enums/user-role.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create({ 
      ...dto, 
      role: UserRole.DEVELOPER,
      isActive: true 
    });
    return this.userRepository.save(user);
  }

  async patch(id: string, dto: UpdateUserDto): Promise<User | null> {
    await this.userRepository.update(id, dto);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void>{
    await this.userRepository.delete(id);
  }
}
