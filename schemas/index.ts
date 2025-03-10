import { gql } from 'apollo-server-express';

export const typeDefs = gql`
type User {
    id: ID!
    email: String!
    password: String!
    createdAt: String!
}

type Query {
    allUsers: [User]!
}
type Mutation {
    createUser(email: String, password: String!): User
}
`

