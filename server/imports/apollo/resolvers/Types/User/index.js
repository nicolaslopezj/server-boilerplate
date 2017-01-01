export default {
  User: {
    email (user) {
      return user.emails[0].address
    }
  }
}
