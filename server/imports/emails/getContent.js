import {SSR} from 'meteor/meteorhacks:ssr'
import juice from 'juice'

export default function (template, data) {
  const content = SSR.render(template, data)
  // puts css styles inline
  return juice(content)
}
