import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User {
    id: String
    name: String
    username: String
    email: String
    emailVerified: boolean
    image: String
  }

  type User {
    id: String
    username: String
  }
  type Query {
    searchUsers(username: String!): [User]
  }
  type Mutation {
    createUsername(username: String!): CreateUsernameResponse
  }
  type CreateUsernameResponse {
    success: Boolean
    error: String
  }
`;

export default typeDefs;
