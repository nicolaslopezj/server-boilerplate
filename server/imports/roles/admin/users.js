import role from './role'

role.allow('viewUser', function (root, {_id}) {
  return true
})
