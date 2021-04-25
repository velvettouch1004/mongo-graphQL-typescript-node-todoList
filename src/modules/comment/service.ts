import { Service } from "typedi";
import { ObjectId } from "mongodb";

import CommentModel from "./model";
import { Comment } from "../../entities";
import { NewCommentInput } from "./input";

@Service() 
export default class CommentService {
  getTaskComments(_id: ObjectId): Promise<Comment []| null> {
    return this.CommentModel.getTaskComments(_id);
  }
  constructor(private readonly CommentModel: CommentModel) {}


  //get C omment by id
  public async getCommentById(_id: ObjectId): Promise<Comment | null> {
    return this.CommentModel.getById(_id);
  }


  public async getAllComments(): Promise<Comment []| null> {
    return this.CommentModel.getAllTasks();
  }
  public async addComment(data: NewCommentInput): Promise<Comment> {
    const newComment = await this.CommentModel.create(data);
    return newComment;
  }
}
