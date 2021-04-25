
import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

@ObjectType()
export class User {
  @Field()
  readonly _id!: ObjectId;

  @prop({ default: Date.now() })
  @Field(() => Date)
  createdAt!: Date;


  @prop()
  @Field()
  username!: string;

  @prop()
  @Field()
  password!: string;


  @prop()
  @Field()
  email!: string;


  
 




}
