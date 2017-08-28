export default function(user, params, context) {
  return user.emails[0].address
}
