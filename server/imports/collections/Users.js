import {Meteor} from 'meteor/meteor'
import SimpleSchema from 'simpl-schema'

const ProfileSchema = new SimpleSchema({
  name: {
    type: String,
    optional: true
  }
})

Meteor.users.attachSchema(new SimpleSchema({
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
    type: ProfileSchema,
    optional: true
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
}))

export default Meteor.users
