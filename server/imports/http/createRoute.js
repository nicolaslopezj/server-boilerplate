import bodyParser from 'body-parser'
import {Picker} from 'meteor/meteorhacks:picker'
import cors from 'cors'
import isPlainObject from 'lodash/isPlainObject'

Picker.middleware(cors())

Picker.middleware(
  bodyParser.json({
    verify(request, response, buffer) {
      request.rawBody = buffer
    }
  })
)

export default function(path, handler) {
  Picker.route(path, function(params, request, response) {
    Promise.resolve(handler(params, request, response))
      .then(result => {
        if (isPlainObject(result)) {
          response.end(JSON.stringify(result, null, 2))
        } else {
          response.end(result)
        }
      })
      .catch(error => {
        console.error('Route error', path)
        console.error(error)
        response.statusCode = 500
        response.end('Error: ' + error.message)
      })
  })
}
