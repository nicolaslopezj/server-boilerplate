import SimpleSchema from 'simpl-schema'
import Profile from './Profile'

export default new SimpleSchema({
  emails: {
    type: Array
  },
  'emails.$': {
    type: Object
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  'emails.$.verified': {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: Profile,
    defaultValue: {}
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Array,
    optional: true
  },
  'roles.$': {
    type: String,
    optional: true
  },
  heartbeat: {
    type: Date,
    optional: true
  }
})
