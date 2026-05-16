import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ChangeEmailDto } from './dto/change-email.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
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
      firstName: dto.firstName,
      lastName: dto.lastName,
      secondLastName: dto.secondLastName,
      email: dto.email,
      passwordHash: dto.password,
      phoneCode: dto.phoneCode,
      phone: dto.phone,
      birthDate: new Date(dto.birthDate),
      role: this.mapSignupRoleToUserRole(dto.role),
      isActive: true 
    });
    return this.userRepository.save(user);
  }

  async updateProfile(id: string, dto: UpdateUserProfileDto): Promise<User | null> {
    const updateData = { 
      firstName: dto.firstName,
      lastName: dto.lastName,
      secondLastName: dto.secondLastName,
      phoneCode: dto.phoneCode,
      phone: dto.phone,
      birthDate: dto.birthDate ? new Date(dto.birthDate) : undefined,
     };

    await this.userRepository.update(id, updateData);
    return this.userRepository.findOne({ 
      where: { id },
    });
  }

  async changeEmail(id: string, dto: ChangeEmailDto): Promise<User | null> {
    await this.userRepository.update(id, {
      email: dto.email,
      //emailConfirmedAt: null,
      //emailConfirmationToken: 'generate-token-here',
    });

    return this.userRepository.findOne({ where: { id } });
  }

  async changePassword(id: string, dto: ChangePasswordDto): Promise<User | null> {
    /*await this.userRepository.update(id, {
      passwordHash: newPasswordHash,
    });*/
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void>{
    await this.userRepository.delete(id);
  }

  private mapSignupRoleToUserRole(signupRole: string): UserRole {
    switch (signupRole) {
      case 'candidate':
        return UserRole.CANDIDATE;
      case 'recruiter':
        return UserRole.RECRUITER;
      default:
        return UserRole.CANDIDATE;
    }
  }
}
