import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    gender: String!
    serviceDepartment: String!
    birthdate: String!
    noOfOffices: Int!
    optionalComment: String!
  }

  type Query {
    allUsers: [User!]!
  }
  type Mutation {
    createUser(
      name: String!
      email: String!
      phone: String!
      gender: String!
      serviceDepartment: String!
      birthdate: String!
      noOfOffices: Int!
      optionalComment: String!
    ): User
  }
  type Mutation {
    updateUserGender(id: ID!, gender: String!): User
  }
`;
