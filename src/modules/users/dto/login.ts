import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class Login {
  @IsNotEmpty()
  @Field(() => String, { description: 'username' })
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @Field(() => String, { description: 'password' })
  @ApiProperty()
  password: string;
}
