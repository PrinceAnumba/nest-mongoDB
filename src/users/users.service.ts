import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/Users.schema';
import { CreateUserDto } from '../dto/CreateUser.dto';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(CreateUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(CreateUserDto);
    return newUser.save();
  }

  getUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  getUserById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  updateUserById(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  deleteUserById(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
