import { Controller, Post, Request, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body('email') email: string, @Body('password') password: string) {
    return await this.authService.login(email, password);
  }

  @UseGuards(JwtGuard)
  @Post('protected')
  async protectedRoute(@Request() req) {
    return req.user; // This will return the authenticated user
  }
}

