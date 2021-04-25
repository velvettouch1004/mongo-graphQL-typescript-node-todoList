
import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class Comment {
  @Field()
  readonly _id!: ObjectId;

 


  @prop()
  @Field()
  user!: string;

  @prop()
  @Field()
  task!: string;


  @prop()
  @Field()
  text!: string;
 




}
