import getContent from './getContent'
import {Meteor} from 'meteor/meteor'
import {Email} from 'meteor/email'

const isProduction = process.env.NODE_ENV === 'production'
const from = 'test@orionsoft.io' // send emails from

const sendEmail = function ({user, subject, template, data, receiver}) {
  const html = getContent(template, {...data, user})
  let to = receiver
  if (!isProduction) {
    to = receiver
    console.log(`Sending testing email to: "${to}"...`)
    console.log(`with: "${data}"...`)
  }
  const email = {to, from, subject, html}
  Email.send(email)
}

export default function ({async, usersIds, subject, template, data, receiver}) {
  Meteor.users.find({_id: {$in: usersIds}}).forEach(user => {
    try {
      if (async) {
        sendEmail({user, subject, template, data, receiver})
      } else {
        Meteor.defer(() => sendEmail({user, subject, template, data, receiver}))
      }
    } catch (error) {
      console.log(`Error sending email to ${user._id}`, error)
    }
  })
}
