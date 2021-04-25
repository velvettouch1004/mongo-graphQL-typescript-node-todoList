import { ObjectType, Field } from "type-graphql";
import { prop } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Comment } from "./comment";

@ObjectType()
export class Todo {
  @Field()
  readonly _id!: ObjectId;

  @prop({ default: Date.now() })
  @Field(() => Date)
  createdAt!: Date;

  @prop({ default: Date.now() })
  @Field(() => Date)
  updatedAt!: Date;

  @prop()
  @Field()
  content!: string;

  @prop({ default: "Task description" })
  @Field()
  description!: string;



  @prop({ default: false })
  @Field()
  isDone!: boolean;


  @prop({ default: "" })
  @Field()
  assignee!: string;

  @prop({ default: Date.now() })
  @Field(() => Date)
  startTime!: Date;
  
  @prop({ default: "" })
  @Field()
  sharedUsers!: string;
  // sharedUsers!: Array<User>;

}
