import Users from 'api/collections/Users'

export default function (root, {_id}) {
  return Users.findOne(_id)
}
