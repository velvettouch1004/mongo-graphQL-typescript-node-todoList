import { Resolver, Arg, Query, Mutation, ID } from "type-graphql";
import { Service } from "typedi";
import { ObjectId } from "mongodb";

import { User } from "../../entities";
import UserService from "./service";
import { NewUserInput } from "./input";

/*
  IMPORTANT: Your business logic must be in the service!
*/

@Service() // Dependencies injection
@Resolver((of) => User)
export default class UserResolver {
  constructor(private readonly UserService: UserService) {}

  @Query((returns) => User)
  async getUser(@Arg("id") id: ObjectId) {
    const User = await this.UserService.getById(id);

    return User;
  }

  @Query((returns) => [User])
  async getUsers() {
    const Users = await this.UserService.getAllUsers();

    return Users;
  }
  
  @Mutation((returns) => User)
  async createUser(
    @Arg("createUserData") createUserData: NewUserInput
  ): Promise<User> {
    const User = await this.UserService.addUser(createUserData);
    return User;
  }
}
