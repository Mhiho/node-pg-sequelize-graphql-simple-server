import { User } from '../models/user';

export const resolvers = {
    Query: {
        allUsers: async () => await User.findAll()
    },
     Mutation: {
        createUser: async (__dirname, {email, password }) => {
            const user = await User.create({ email, password })
            return user;
        }
     }
}