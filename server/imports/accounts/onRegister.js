import {Accounts} from 'meteor/accounts-base'
import cloneDeep from 'lodash/cloneDeep'
import Users from 'api/collections/Users'

Accounts.onCreateUser(function (options, user = {}) {
  user.profile = options.profile || {}

  if (user.services.google) {
    user.profile = {
      name: user.services.google.name,
      image: { url: user.services.google.picture, fileId: '1' }
    }
    user.emails = [{ address: user.services.google.email, verified: true }]
  }

  if (user.services.facebook) {
    user.profile = {
      name: user.services.facebook.name,
      image: { url: 'https://graph.facebook.com/' + user.services.facebook.id + '/picture?type=large', fileId: '1' }
    }
    user.emails = [{ address: user.services.facebook.email, verified: true }]
  }

  const clone = cloneDeep(user)
  delete clone._id
  Users.simpleSchema().validate(clone)

  return user
})
