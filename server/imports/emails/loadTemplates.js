const templates = [
  // load other templates here
]

templates.forEach(template => {
  const assetPath = `emails/templates/${template}.html`
  // eslint-disable-next-line
  SSR.compileTemplate(template, Assets.getText(assetPath))
})

const auths = [
  'enroll',
  'reset',
  'verify'
]

auths.forEach(template => {
  const assetPath = `emails/auth/${template}.html`
  // eslint-disable-next-line
  SSR.compileTemplate(`auth_${template}`, Assets.getText(assetPath))
})

const layouts = [
  'button',
  'layout',
  'unsubscribe',
  'styles'
]

layouts.forEach(template => {
  const assetPath = `emails/layout/${template}.html`
  // eslint-disable-next-line
  SSR.compileTemplate(template, Assets.getText(assetPath))
})
