import {Meteor} from 'meteor/meteor'
import send from 'api/emails/send'

Meteor.users.after.insert(function (userId, doc) {
  send({
    usersIds: [doc._id],
    subject: 'Welcome',
    data: {user: doc},
    template: 'welcome'
  })
})
