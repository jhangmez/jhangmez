import { generateBadgeUrl } from './src/utils/auxiliars'
import Mustache from 'mustache'
import fs from 'fs-extra'
const MUSTACHE_MAIN_DIR = './main.mustache'
/**
 * DATA is the object that contains all
 * the data to be provided to Mustache
 * Notice the "name" and "date" property.
 */
const badges = [
  { tech: 'React', color: '45b8d8', logoColor: 'white', logo: 'react' },
  {
    tech: 'Tailwindcss',
    color: '0369a1',
    logoColor: 'white',
    logo: 'tailwindcss'
  },
  {
    tech: 'Github Actions',
    color: '2088FF',
    logoColor: 'white',
    logo: 'github-actions'
  },
  {
    tech: 'Google Cloud Platform',
    color: '1a73e8',
    logoColor: 'white',
    logo: 'google-cloud'
  },
  {
    tech: 'TypeScript',
    color: '007ACC',
    logoColor: 'white',
    logo: 'typescript'
  },
  { tech: 'Insomnia', color: '5849BE', logoColor: 'white', logo: 'insomnia' },
  {
    tech: 'Apollo GraphQL',
    color: '311C87',
    logoColor: 'white',
    logo: 'apollo-graphql'
  },
  { tech: 'GraphQL', color: 'E10098', logoColor: 'white', logo: 'graphql' },
  { tech: 'Sass', color: 'CC6699', logoColor: 'white', logo: 'sass' },
  {
    tech: 'Styled Components',
    color: 'db7092',
    logoColor: 'white',
    logo: 'styled-components'
  },
  { tech: 'Git', color: 'F05032', logoColor: 'white', logo: 'git' },
  { tech: 'NestJs', color: 'ea2845', logoColor: 'white', logo: 'nestjs' },
  { tech: 'Angular', color: 'DD0031', logoColor: 'white', logo: 'angular' },
  { tech: 'NPM', color: 'CB3837', logoColor: 'white', logo: 'npm' },
  { tech: 'HTML5', color: 'E34F26', logoColor: 'white', logo: 'html5' },
  { tech: 'Brave Browser', color: 'FB542B', logoColor: 'white', logo: 'brave' },
  { tech: 'Prettier', color: 'F7B93E', logoColor: 'black', logo: 'prettier' },
  {
    tech: 'PostgreSQL',
    color: '316192',
    logoColor: 'white',
    logo: 'postgresql'
  },
  { tech: 'Nodejs', color: '43853d', logoColor: 'white', logo: 'Node.js' }
]
const badgeUrls = badges.map((badge) =>
  generateBadgeUrl(badge.tech, badge.logo, badge.color, badge.logoColor)
)

let DATA = {
  name: 'Jhan Gómez',
  date: new Date().toLocaleDateString('es-PE', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'America/Lima'
  }),
  badges: badgeUrls.join('')
}
/**
 * A - We open 'main.mustache'
 * B - We ask Mustache to render our file with the data
 * C - We create a README.md file with the generated output
 */
function generateReadMe() {
  fs.readFile(MUSTACHE_MAIN_DIR, (err, data) => {
    if (err) throw err
    const output = Mustache.render(data.toString(), DATA)
    fs.writeFileSync('README.md', output)
  })
}
generateReadMe()
