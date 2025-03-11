import { Office } from "../models/office";
import { User } from "../models/user";

export const resolvers = {
  Query: {
    allUsers: async () => await User.findAll(),
    allOffices: async () => await Office.findAll(),
  },
  Mutation: {
    createUser: async (
      _,
      {
        name,
        email,
        phone,
        gender,
        serviceDepartment,
        birthdate,
        noOfOffices,
        optionalComment,
      }: any
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
    updateUserGender: async (_, { id, gender }) => {
      const user = await User.findOne({ where: { id } });
      user.gender = gender;
      user.save();
      return user;
    },
  },
};
