import { getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Comment } from "../../entities/comment";


import { NewCommentInput } from "./input";

// This generates the mongoose model for us
export const CommentMongooseModel = getModelForClass(Comment);

export default class CommentModel {
 
  async getById(_id: ObjectId): Promise<Comment | null> {
   // find Task
    return CommentMongooseModel.findById(_id).lean().exec();
  }
// create Task
  async create(data: NewCommentInput): Promise<Comment> {
    const Comment = new CommentMongooseModel(data);
    return Comment.save();
  }

  async getAllTasks(): Promise<Comment []| null> {
  // return all Tasks
    return CommentMongooseModel.find();
  }
  async getTaskComments(_id: ObjectId): Promise<Comment []| null> {
    // return post comments
    return CommentMongooseModel.find().where({ task: _id});
  }
}
