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

  const npmSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 15 15" className="mx-1"><path fill="none" stroke="black" d="M4.5 10.5v2h2v-2h8v-6H.5v6zm0 0v-6m4 0v6M6.5 6v3m-4-3v4.5m8-4.5v4.5m2-4.5v4.5"/></svg>`

  const rows = tools
    .map(
      (tool) =>
        `| <img src="${tool.image}" alt="${
          tool.name
        }" width="fit-content" /> | [${tool.name}](${tool.url}) | ${
          tool.site.toLowerCase() === 'npm' ? npmSvg : tool.site
        } |\n`
    )
    .join('')
  return `${headerRow}${rows}`
}
