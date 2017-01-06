import {Accounts} from 'meteor/accounts-base'
import getContent from 'api/emails/getContent'

Accounts.emailTemplates.from = 'Orionsoft'
Accounts.emailTemplates.siteName = 'Orionsoft'

const getURL = function (path) {
  return `http://localhost:3000${path}`
}

const getEmailTemplate = function (template, user, url) {
  const data = {
    user,
    url,
    homeUrl: getURL('/')
  }

  return getContent(template, data)
}

Accounts.emailTemplates.verifyEmail.subject = function (user) {
  return 'Confirma tu email'
}

Accounts.emailTemplates.verifyEmail.html = function (user, url) {
  return getEmailTemplate('auth_verify', user, url)
}

Accounts.urls.verifyEmail = function (token) {
  return getURL('/verify-email/' + token)
}

Accounts.emailTemplates.resetPassword.subject = function (user) {
  return 'Instrucciones para resetear la contraseña'
}

Accounts.emailTemplates.resetPassword.html = function (user, url) {
  return getEmailTemplate('auth_reset', user, url)
}

Accounts.urls.resetPassword = function (token) {
  return getURL('/reset/' + token)
}

Accounts.emailTemplates.enrollAccount.subject = function (user) {
  return 'Se ha creado una cuenta para ti'
}

Accounts.emailTemplates.enrollAccount.html = function (user, url) {
  return getEmailTemplate('auth_enroll', user, url)
}

Accounts.urls.enrollAccount = function (token) {
  return getURL('/enroll/' + token)
}
