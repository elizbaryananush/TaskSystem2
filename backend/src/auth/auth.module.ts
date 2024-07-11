import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';

@Module({
  imports: [],

  controllers: [AuthController],
  
  providers: [AuthService]
})
export class AuthModule { }
