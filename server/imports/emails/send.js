import getContent from './getContent'
import {Meteor} from 'meteor/meteor'
import {Email} from 'meteor/email'

const isProduction = process.env.NODE_ENV === 'production'
const from = process.env.MAIL_FROM || 'test@orionsoft.io' // send emails from

const sendEmail = function ({sync, to, subject, template, data}) {
  const html = getContent(template, data)

  if (!isProduction) {
    to = 'test@orionsoft.io'
    console.log(`Sending testing email to: "${to}"...`)
    console.log(`with: "${data}"...`)
  }
  
  const email = {to, from, subject, html}

  try {
    if (sync) {
      Email.send(email)
    } else {
      Meteor.defer(() => Email.send(email))
    }
  } catch (error) {
    console.log(`Error sending email to ${to}`, error)
  }
}

export default function ({sync, usersIds, subject, template, data, addresses}) {
  Meteor.users.find({_id: {$in: usersIds}}).forEach(user => {
    const finalData = {...data, user}
    const to = user.emails[0].address
    sendEmail({sync, to, subject, template, data: finalData})
  })

  if (!addresses) return
  addresses.map(to => {
    sendEmail({sync, to, subject, template, data})
  })
}
