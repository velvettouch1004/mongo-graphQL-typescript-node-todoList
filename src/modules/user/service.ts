import { Service } from "typedi";
import { ObjectId } from "mongodb";

import UserModel from "./model";
import { User } from "../../entities";
import { NewUserInput } from "./input";

@Service() 
export default class UserService {
  constructor(private readonly UserModel: UserModel) {}


  //get task by id
  public async getById(_id: ObjectId): Promise<User | null> {
    return this.UserModel.getUserById(_id);
  }
  public async getAllUsers(): Promise<User []| null> {
    return this.UserModel.getUsers();
  }
  public async addUser(data: NewUserInput): Promise<User> {
    const newUser = await this.UserModel.createUser(data);
    return newUser;
  }
}
