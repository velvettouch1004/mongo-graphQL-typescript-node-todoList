import { getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

import { Todo } from "../../entities";
import { finishTaskInput, NewTodoInput } from "./input";

// This generates the mongoose model for us
export const TodoMongooseModel = getModelForClass(Todo);

export default class TodoModel {
  async getById(_id: ObjectId): Promise<Todo | null> {
    // find Task
    return TodoMongooseModel.findById(_id).lean().exec();
  }
  
  // create Task
  async create(data: NewTodoInput): Promise<Todo> {
    const todo = new TodoMongooseModel(data);
    return todo.save();
  }

  // update Task
  async setTaskdone(data: finishTaskInput): Promise<Todo | null> {
    const filter = { _id: data.task , assignee :data.user};
    const update = { isDone: true };
    
    return TodoMongooseModel.findOneAndUpdate(filter, update);
  }

  // delete
  async deleteTask(data: finishTaskInput): Promise<Todo | null> {
    const filter = { _id: data.task , assignee :data.user};
      return TodoMongooseModel.findOneAndDelete(filter);
  }

  async shareTask(data: finishTaskInput): Promise<Todo | null> {
    const filter = { _id: data.task};
    const update = { sharedUsers: data.user };
    
    return TodoMongooseModel.findOneAndUpdate(filter, update);
  }

  async getAllTasks(): Promise<Todo[] | null> {
    // return all Tasks
    return TodoMongooseModel.find();
  }
  async getUserAssignedTasks(_id: ObjectId): Promise<Todo[] | null> {
    // return user assigned Tasks
    return TodoMongooseModel.find().where({ assignee: _id });
  }
}
