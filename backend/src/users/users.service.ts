import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(name: string, email: string, password: string): Promise<any> {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const user = new this.userModel({ name, email, password: hashedPassword });
      return await user.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('Email already in use');
      } else {
        throw new Error('Registration failed');
      }
    }
  }

  async findOne(email: string): Promise<any> {
    return this.userModel.findOne({ email }).exec();
  }

  async findUser(id:string): Promise<any>{
    return this.userModel.findById(id)
  }
}

