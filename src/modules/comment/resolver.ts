import { Resolver, Arg, Query, Mutation, ID } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { Comment } from "../../entities";
import CommentService from "./service";
import { NewCommentInput } from "./input";

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Service() // Dependencies injection
@Resolver((of) => Comment)
export default class CommentResolver {
  constructor(private readonly CommentService: CommentService) {}

  @Query((returns) => Comment)
  async getComment(@Arg("id") id: ObjectId) {
    const Comment = await this.CommentService.getCommentById(id);

    return Comment;
  }
  @Query((returns) => Comment)
  async getCommentList(@Arg("id") id: ObjectId) {
    const Comment = await this.CommentService.getCommentById(id);

    return Comment;
  }

  @Query((returns) => [Comment])
  async getAllTasks() {
    const Tasks = await this.CommentService.getAllComments();
    return Tasks;
  }

  @Query((returns) => [Comment])
  async getTaskComments(@Arg("id") id: ObjectId) {
    const Tasks = await this.CommentService.getTaskComments(id);
    return Tasks;
  }

  @Mutation((returns) => Comment)
  async createComment(
    @Arg("createCommentData") createCommentData: NewCommentInput
  ): Promise<Comment> {
    const Comment = await this.CommentService.addComment(createCommentData);
    return Comment;
  }
}
