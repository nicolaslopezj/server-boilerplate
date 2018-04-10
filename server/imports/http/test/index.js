import createRoute from '../createRoute'
import send from 'api/emails/send'

createRoute('/test', async (params, request) => {
  await send({
    addresses: ['nicolaslopezj@me.com'],
    subject: 'Esto es una prueba',
    template: 'test'
  })

  return {
    message: 'This is a test'
  }
})
