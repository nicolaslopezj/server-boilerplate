import role from './role'

role.allow('viewUser', function (root, {_id}) {
  return this.userId === _id
})
