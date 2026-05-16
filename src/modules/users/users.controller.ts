import { 
  Body, Controller, Delete, Get, 
  HttpCode, HttpStatus, Param, 
  Patch, Post
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { ChangeEmailDto } from './dto/change-email.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post()
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }
  
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(id);
  }
  
  @Patch(':id') 
  updateProfile(@Param('id') id: string, @Body() dto: UpdateUserProfileDto): Promise<User | null> {
    return this.usersService.updateProfile(id, dto);
  }

  @Patch(':id') 
  changeEmail(@Param('id') id: string, @Body() dto: ChangeEmailDto): Promise<User | null> {
    return this.usersService.changeEmail(id, dto);
  }

  @Patch(':id') 
  changePassword(@Param('id') id: string, @Body() dto: ChangePasswordDto): Promise<User | null> {
    return this.usersService.changePassword(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: string): Promise<void> {
    return this.usersService.delete(id);
  }
}
