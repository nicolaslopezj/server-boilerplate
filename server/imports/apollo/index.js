import {createApolloServer} from 'meteor/orionsoft:apollo'
import {makeExecutableSchema} from 'graphql-tools'
import {loadSchema, getSchema} from 'graphql-loader'
import {initAccounts} from 'meteor/nicolaslopezj:apollo-accounts'
import cors from 'cors'
import typeDefs from './schema'
import resolvers from './resolvers'
import 'paginated-graphql'

// Load all accounts related resolvers and type definitions into graphql-loader
initAccounts({})

// Load all your resolvers and type definitions into graphql-loader
loadSchema({typeDefs, resolvers})

// Gets all the resolvers and type definitions loaded in graphql-loader
const schema = makeExecutableSchema(getSchema())

createApolloServer({schema}, {
  configServer (graphQLServer) {
    graphQLServer.use(cors())
  }
})
