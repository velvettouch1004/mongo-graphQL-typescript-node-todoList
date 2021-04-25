import { Field, InputType, ID } from "type-graphql";
import { MaxLength, MinLength } from "class-validator";

@InputType()
export class NewUserInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  username: string;


  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  password: string;
  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  email: string;
}
