import { SchemaMutations as Auth } from 'meteor/nicolaslopezj:apollo-accounts'

export default `
type Mutation {
  ${Auth()}
}
`
