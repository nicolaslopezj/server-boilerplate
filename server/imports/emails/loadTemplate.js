import includes from 'lodash/includes'

const loaded = []

export default function(templateName) {
  if (includes(loaded, templateName)) return
  const assetPath = `emails/templates/${templateName}.html`
  // eslint-disable-next-line
  SSR.compileTemplate(templateName, Assets.getText(assetPath))
  loaded.push(templateName)
}
