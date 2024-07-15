import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Post('signup')
  async signUp(@Body() body: { name: string; email: string; password: string }) {
    return this.usersService.create(body.name, body.email, body.password);
  }

  @Post('getMe')
  async getMe(@Body() body: { id: string }) {
    try {
      return this.usersService.findUser(body.id)
    } catch (error) {
      return error
    }
  }
}
