import Query from './Query'
import Mutation from './Mutation'
import Scalars from './Scalars'
import Types from './Types'

export default {
  ...Types,
  ...Scalars,
  Query,
  Mutation
}
