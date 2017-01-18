import {Kind} from 'graphql/language'

export default {
  __parseValue (value) {
    return new Date(value) // value from the client
  },
  __serialize (value) {
    return value.getTime() // value sent to the client
  },
  __parseLiteral (ast) {
    switch (ast.kind) {
      case Kind.INT:
      case Kind.FLOAT:
        return new Date(parseFloat(ast.value))
      default:
        return null
    }
  }
}
