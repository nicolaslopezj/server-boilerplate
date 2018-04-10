import {SSR} from 'meteor/meteorhacks:ssr'
import juice from 'juice'
import loadTemplate from './loadTemplate'

export default function(template, data) {
  loadTemplate(template)
  const content = SSR.render(template, data)
  // puts css styles inline
  return juice(content)
}
