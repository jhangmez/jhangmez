export const generateBadgeUrl = (
  tech: string,
  logo: string,
  color: string,
  logoColor: string
): string => {
  const url = `https://img.shields.io/badge/${tech}-${color}?logo=${
    tech ?? logo
  }&style=flat-square&logoColor=${logoColor}`
  return `<img alt="${tech}" src="${url}" />
  `
}
