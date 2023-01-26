import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UsersService } from './users.service';
import { Token } from './dto/token';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => String)
  whoAmI() {
    return 'unimplemented';
  }

  @Mutation(() => Token)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    return this.usersService.login(username, password);
  }
}
