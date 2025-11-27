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
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('User not found', 404);
    const foundUser = await this.usersService.getUserById(id);
    // if (!foundUser) throw new HttpException('User not found', 404);

    return foundUser;
  }

  @Patch(':id')
  @UsePipes( new ValidationPipe())
    async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid Usert ID', 400);
        const updatedUser = await this.usersService.updateUserById(id, updateUserDto);
        if (!updatedUser) throw new HttpException('User not found', 404);
        return updatedUser;
       
    }


    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id);
        if (!isValid) throw new HttpException('Invalid Usert ID', 400);
        const deletedUser = await this.usersService.deleteUserById(id);
        if (!deletedUser) throw new HttpException('User not found', 404);
        return { message: 'User deleted successfully' };
    }
}
