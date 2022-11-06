import userResolvers from './user'
import merge from 'lodash.merge'
import convsationResolvers from './conversation'

const resolvers = merge({}, userResolvers, convsationResolvers)

export default resolvers