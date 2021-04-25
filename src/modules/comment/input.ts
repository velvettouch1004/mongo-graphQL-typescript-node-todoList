import { Field, InputType, ID } from "type-graphql";
import { MaxLength, MinLength } from "class-validator";

@InputType()
export class NewCommentInput {
  @Field()
  @MaxLength(300)
  @MinLength(1)
  text: string;


  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  user: string;
  //////////
  @Field()
  @MaxLength(300)
  @MinLength(1)
  task: string;
}
