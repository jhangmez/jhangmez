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
