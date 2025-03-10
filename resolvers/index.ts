import { User } from "../models/user";

export const resolvers = {
  Query: {
    allUsers: async () => await User.findAll(),
  },
  Mutation: {
    createUser: async (
      __dirname,
      {
        name,
        email,
        phone,
        gender,
        serviceDepartment,
        birthdate,
        noOfOffices,
        optionalComment,
      }
    ) => {
      const user = await User.create({
        name,
        email,
        phone,
        gender,
        serviceDepartment,
        birthdate,
        noOfOffices,
        optionalComment,
      });
      return user;
    },
  },
};
