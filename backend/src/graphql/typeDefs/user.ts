import { gql } from "apollo-server-core";

const typeDefs = gql`
  type User{
    id: String
    username: String

  }

#   read only
  type Query {
    searchUsers(username: String): [User] 
  }

# write
  type Mutation {
    createUsername(username: String): CreateUserNameResponse
  }

  type CreateUserNameResponse{
    success: Boolean
    error: String

  }
`;

export default typeDefs
