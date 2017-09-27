import bodyParser from 'body-parser'
import {Picker} from 'meteor/meteorhacks:picker'
import cors from 'cors'

import './route'

Picker.middleware(cors())

Picker.middleware(
  bodyParser.json({
    verify(request, response, buffer) {
      request.rawBody = buffer
    }
  })
)
