import {Meteor} from 'meteor/meteor'
import Schema from './Schema'

Meteor.users.attachSchema(Schema)

export default Meteor.users
