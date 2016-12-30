import User from './User.graphql'
import { SchemaTypes as Auth } from 'meteor/nicolaslopezj:apollo-accounts'

export default [
  User,
  Auth()
]
