import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Login } from './dto/login';
import { Token } from './dto/token';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 200,
    description: 'API token',
    type: Token,
  })
  login(@Body() input: Login) {
    return this.usersService.login(input.username, input.password);
  }
}
