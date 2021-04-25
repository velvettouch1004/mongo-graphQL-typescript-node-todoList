import { getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

import { User } from "../../entities";
import { NewUserInput } from "./input";

// This generates the mongoose model for us
export const UserMongooseModel = getModelForClass(User);

export default class UserModel {
  async getUserById(_id: ObjectId): Promise<User | null> {
    // Use mongoose as usual
    return UserMongooseModel.findById(_id).lean().exec();
  }


  async getUsers(): Promise<User []| null> {
    // Use mongoose as usual
    return UserMongooseModel.find();
  }
  async createUser(data: NewUserInput): Promise<User> {
    const User = new UserMongooseModel(data);

    return User.save();
  }
}
