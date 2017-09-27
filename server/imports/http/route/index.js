import {Picker} from 'meteor/meteorhacks:picker'

Picker.route('/route', function(params, request, response) {
  response.end('Hello World')
})
