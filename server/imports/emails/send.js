import getContent from './getContent'
import {Meteor} from 'meteor/meteor'
import {Email} from 'meteor/email'

const isProduction = process.env.NODE_ENV === 'production'
const from = process.env.MAIL_FROM || 'test@orionsoft.io' // send emails from

const sendEmail = function ({to, subject, template, data}) {
  const html = getContent(template, data)

  if (!isProduction) {
    const oldTo = to
    to = 'test@orionsoft.io'
    console.log(`Sending testing email to "${to}" instead if "${oldTo}..."`)
  }

  const email = {to, from, subject, html}

  try {
    Email.send(email)
  } catch (error) {
    console.log(`Error sending email to ${to}`, error)
  }
}

export default async function ({usersIds, subject, template, data, addresses}) {
  Meteor.users.find({_id: {$in: usersIds}}).forEach(user => {
    const finalData = {...data, user}
    const to = user.emails[0].address
    sendEmail({to, subject, template, data: finalData})
  })

  if (!addresses) return
  addresses.map(to => {
    sendEmail({to, subject, template, data})
  })
}
