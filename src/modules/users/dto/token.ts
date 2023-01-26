import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Token {
  @ApiProperty()
  @Field(() => String, { description: 'user id' })
  userId: string;

  @ApiProperty()
  @Field(() => String, { description: 'name' })
  name: string;

  @ApiProperty()
  @Field(() => String, { description: 'access token' })
  accessToken: string;

  @ApiProperty()
  @Field(() => String, { description: 'id token' })
  idToken: string;

  @ApiProperty()
  @Field(() => String, { description: 'refresh token' })
  refreshToken: string;
}
