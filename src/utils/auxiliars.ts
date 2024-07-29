export const generateBadgeUrl = (
  tech: string,
  logo: string,
  color: string,
  logoColor: string
): string => {
  const url = `https://img.shields.io/badge/${tech}-${color}?logo=${
    logo ?? tech
  }&style=flat-square&logoColor=${logoColor}`
  return `<img alt="${tech}" src="${url}" />`
}

export const generateToolUrl = (
  name: string,
  url: string,
  image: string,
  percent: number = 40
): string => {
  const dashes = '-'.repeat(name.length)
  return `| <img src="${image}" alt="${name}" width="${percent}%"  /> |
| ${dashes} |
| [${name}](${url}) |
`
}
