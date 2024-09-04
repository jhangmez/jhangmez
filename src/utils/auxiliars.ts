export const generateBadgeUrl = (
  tech: string,
  logo: string,
  color: string,
  logoColor: string
): string => {
  const url = `https://img.shields.io/badge/${tech}-${color}?logo=${
    logo ?? tech
  }&style=flat-square&logoColor=${logoColor}`
  return `<img alt="${tech}" src="${url}" />
  `
}

export const generateToolUrl = (
  tools: {
    name: string
    url: string
    image: string
  }[]
): string => {
  const headerRow = '| Image | Title |\n|---------|--------|\n'

  const rows = tools
    .map(
      (tool) =>
        `| <img src="${tool.image}" alt="${tool.name}" width="fit-content" /> | [${tool.name}](${tool.url}) |\n`
    )
    .join('')
  return `${headerRow}${rows}`
}

export const generatePackageUrl = (
  tools: {
    name: string
    url: string
    image: string
    site: string
  }[]
): string => {
  const headerRow = '| Image | Title | Site |\n|---------|--------|------|\n'

  const npmImage = `<img src="https://raw.githubusercontent.com/npm/logos/master/npm%20logo/npm-logo-red.png" alt="NPM logo" width="40" style="max-width: 100%;" />`

  const rows = tools
    .map(
      (tool) =>
        `| <img src="${tool.image}" alt="${
          tool.name
        }" width="fit-content" /> | [${tool.name}](${tool.url}) | ${
          tool.site.toLowerCase() === 'npm' ? npmImage : tool.site
        } |\n`
    )
    .join('')
  return `${headerRow}${rows}`
}
