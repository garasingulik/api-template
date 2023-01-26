import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Token } from './dto/token';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}

  async login(username: string, password: string): Promise<Token> {

    try {
      const loginResult = {
        userId: "1",
        email: "test@user.com",
        name: "Test User",
        accessToken: "token",
        idToken: "token",
        refreshToken: "token"
      }
      return loginResult;
    } catch (error) {
      // translating any errors to unauthorized exception
      throw new UnauthorizedException();
    }
  }
}
