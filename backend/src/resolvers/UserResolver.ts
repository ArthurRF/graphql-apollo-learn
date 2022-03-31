import { Arg, Mutation, Query, Resolver } from "type-graphql";

import { User } from "../models/User";

@Resolver()
export class UserResolver {
  private data: User[] = [];

  @Query(() => [User])
  public async users() {
    return this.data;
  }

  @Mutation(() => User)
  public async createUser(
    @Arg("name") name: string
  ) {
    const user = { id: (Math.random() * 100000).toString(), name };

    this.data.push(user);

    return user;
  }
}