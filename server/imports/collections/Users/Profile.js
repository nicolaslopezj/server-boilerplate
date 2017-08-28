import SimpleSchema from 'simpl-schema'

export default new SimpleSchema({
  name: {
    type: String,
    optional: true
  },
  phone: {
    type: String,
    optional: true
  }
})
