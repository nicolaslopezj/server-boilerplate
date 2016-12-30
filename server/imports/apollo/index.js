import { createApolloServer } from 'meteor/orionsoft:apollo'
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors'

import typeDefs from './schema'
import resolvers from './resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({
  schema
}, {
  configServer (graphQLServer) {
    graphQLServer.use(cors())
  }
})
