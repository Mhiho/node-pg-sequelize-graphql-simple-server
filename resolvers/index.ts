import { Office } from "../models/user_office";
import { User } from "../models/user_office";
import { UserType } from "../types/User";
import { v4 as uuid } from "uuid";

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
        birthdate,
        noOfOffices,
        optionalComment,
      }: UserType
    ) => {
      const user = await User.create({
        name,
        email,
        phone,
        gender,
        serviceDepartment: [],
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
    addOfficeToUser: async (_, { id, officeId }) => {
      const user = await User.findOne({ where: { id } });
      user.serviceDepartment.push(officeId);
      user.noOfOffices = user.serviceDepartment.length;
      user.save();
      return user;
    },
    createOffice: async (_, { name, street, streetNo, city }) => {
      const office = await Office.create({
        officeId: uuid(),
        name,
        street,
        streetNo,
        city,
      });
      return office;
    },
    deleteOffice: async (_, { id, officeId }) => {
      const user = await User.findOne({ where: { id } });
      user.serviceDepartment = user.serviceDepartment.filter(
        (department) => department !== officeId
      );
      user.noOfOffices = user.serviceDepartment.length;
      user.save();
      return user;
    },
  },
};
