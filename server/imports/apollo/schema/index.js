import Query from './Query'
import Mutation from './Mutation'
import Types from './Types'
import Scalars from './Scalars'

export default [
  ...Query,
  ...Mutation,
  ...Types,
  ...Scalars
]
