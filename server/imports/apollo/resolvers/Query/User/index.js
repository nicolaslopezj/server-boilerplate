import {Roles} from 'meteor/nicolaslopezj:roles'
import me from './me'
import user from './user'

export default {
  me,
  @Roles.action('viewUser')
  user
}
