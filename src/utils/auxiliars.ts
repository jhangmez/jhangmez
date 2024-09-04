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

  const npmSvg = `<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDE1IDE1IiBjbGFzc05hbWU9Im14LTEiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik00LjUgMTAuNXYyaDJ2LTJoOHYtNkguNXY2em0wIDB2LTZtNCAwdjZNNi41IDZ2M20tNC0zdjQuNW04LTQuNXY0LjVtMi00LjV2NC41Ii8+PC9zdmc+" alt="NPM logo" width="28" height="28" />`

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
