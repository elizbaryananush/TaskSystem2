import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string): Promise<any> {
    return this.usersService.findOne(email);
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Wrong password');
    }

    const payload = { email: user.email, sub: user._id };
    return {
      ...user,
      accessToken: this.jwtService.sign(payload),
    };
  }
}

