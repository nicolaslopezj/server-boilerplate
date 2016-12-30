import Users from '../../../../collections/Users'

export default function (root, params, context) {
  return Users.findOne(context.userId)
}
