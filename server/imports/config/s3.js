import {Picker} from 'meteor/meteorhacks:picker'
import {Meteor} from 'meteor/meteor'
import crypto from 'crypto'

Picker.route('/sign_s3', function (params, request, response) {
  const signature = crypto.createHmac('sha1', Meteor.settings.s3.secret).update(params.query.to_sign).digest('base64')
  response.setHeader('Access-Control-Allow-Origin', '*')
  return response.end(signature)
}, { where: 'server' })
