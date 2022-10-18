// query mutation or subscription resolver

const resolvers = {
  Query: {
    searchUsers: () => {},
  },
  Mutation: {
    createUsername: (_: any, args: {username: string}, context: any) => {
        const {username} =  args
      console.log("does it work?", username);
    },
  },

  // Subscription: {

  // }
};

export default resolvers;
