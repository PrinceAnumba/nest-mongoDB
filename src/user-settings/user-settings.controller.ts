import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  HttpException,
  Patch,
  UsePipes,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { UsersSettingsService } from './user-settings.service';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';

@Controller('users/settings')
export class UsersSettingsController {
  constructor(private usersSettingsService: UsersSettingsService) {}

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid Usert ID', 400);
    const updatedUser = await this.usersSettingsService.updateUserById(
      id,
      updateUserDto,
    );
    if (!updatedUser) throw new HttpException('User not found', 404);
    return updatedUser;
  }
}
