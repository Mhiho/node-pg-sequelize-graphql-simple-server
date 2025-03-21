import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
} from "graphql-constraint-directive";
import { UUID } from "sequelize";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    gender: String!
    serviceDepartment: [String!]!
    birthdate: String!
    noOfOffices: Int
    optionalComment: String!
  }
  type Office {
    id: ID!
    officeId: String!
    name: String!
    street: String!
    streetNo: Int!
    city: String!
  }
  type Query {
    allUsers: [User!]!
  }
  type Query {
    allOffices: [Office!]!
  }
  type Mutation {
    createUser(
      name: String!
      email: String! @constraint(format: "email", maxLength: 255)
      phone: String! @constraint(maxLength: 16)
      gender: String!
      serviceDepartment: [String!]!
      birthdate: String!
      optionalComment: String!
    ): User
  }
  type Mutation {
    createOffice(
      name: String!
      street: String!
      streetNo: Int!
      city: String!
    ): Office
  }
  type Mutation {
    updateUserGender(id: ID!, gender: String!): User
  }
  type Mutation {
    addOfficeToUser(id: ID!, officeId: String!): User
  }
  type Mutation {
    deleteOffice(id: ID!, officeId: String!): User
  }
`;

export let schema = makeExecutableSchema({
  typeDefs: [constraintDirectiveTypeDefs, typeDefs],
});
schema = constraintDirective()(schema);
