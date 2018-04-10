import {Accounts} from 'meteor/accounts-base'
import getContent from 'api/emails/getContent'

const isProduction = process.env.NODE_ENV === 'production'
Accounts.emailTemplates.from = process.env.MAIL_FROM || 'test@orionsoft.io'
Accounts.emailTemplates.siteName = 'Orionsoft'

const getURL = function(path) {
  console.warn('should define base url for email')
  return isProduction ? `http://admin.orionsoft.io${path}` : `http://localhost:3010${path}`
}

const getEmailTemplate = function(template, user, url) {
  const data = {
    user,
    url,
    homeUrl: getURL('/')
  }

  return getContent(template, data)
}

Accounts.emailTemplates.verifyEmail.subject = function(user) {
  return 'Confirma tu email'
}

Accounts.emailTemplates.verifyEmail.html = function(user, url) {
  return getEmailTemplate('verify', user, url)
}

Accounts.urls.verifyEmail = function(token) {
  return getURL('/verify-email/' + token)
}

Accounts.emailTemplates.resetPassword.subject = function(user) {
  return 'Instrucciones para resetear la contraseña'
}

Accounts.emailTemplates.resetPassword.html = function(user, url) {
  return getEmailTemplate('reset', user, url)
}

Accounts.urls.resetPassword = function(token) {
  return getURL('/reset/' + token)
}

Accounts.emailTemplates.enrollAccount.subject = function(user) {
  return 'Se ha creado una cuenta para ti'
}

Accounts.emailTemplates.enrollAccount.html = function(user, url) {
  return getEmailTemplate('enroll', user, url)
}

Accounts.urls.enrollAccount = function(token) {
  return getURL('/enroll/' + token)
}
