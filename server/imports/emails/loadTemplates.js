const layouts = ['button', 'layout', 'unsubscribe', 'styles']

layouts.forEach(template => {
  const assetPath = `emails/layout/${template}.html`
  // eslint-disable-next-line
  SSR.compileTemplate(template, Assets.getText(assetPath))
})
