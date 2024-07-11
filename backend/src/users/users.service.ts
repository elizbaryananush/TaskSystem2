import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Error as MongooseError } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async create(name: string, email: string, password: string): Promise<any> {
        const hashed_password = await bcrypt.hash(password, 10);
        try {
            const user = new this.userModel({ name, email, password: hashed_password })
            return await user.save();
        } catch (error) {
            let massage ;
            if(error.code === 11000){
                massage = {code : 500 , massage : 'This email is already in use'};
            }else{
                massage = {code : 500 , massage : 'Registration failed'}
            }
            return massage;
        }
    }
}
