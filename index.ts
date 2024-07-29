import { generateBadgeUrl, generateToolUrl } from './src/utils/auxiliars'
import Mustache from 'mustache'
import fs from 'fs-extra'
const MUSTACHE_MAIN_DIR = './main.mustache'

const badges = [
  { tech: 'React', color: '45b8d8', logoColor: 'white', logo: 'react' },
  { tech: 'React Native', color: '20232A', logoColor: 'white', logo: 'react' },
  { tech: 'Next.js', color: '000000', logoColor: 'white', logo: 'nextdotjs' },
  { tech: 'Angular', color: 'DD0031', logoColor: 'white', logo: 'angular' },
  {
    tech: 'TypeScript',
    color: '007ACC',
    logoColor: 'white',
    logo: 'typescript'
  },
  {
    tech: 'Python',
    color: '14354C',
    logoColor: 'white',
    logo: 'python'
  },
  { tech: 'HTML5', color: 'E34F26', logoColor: 'white', logo: 'html5' },
  { tech: 'GraphQL', color: 'E10098', logoColor: 'white', logo: 'graphql' },
  {
    tech: 'Tailwindcss',
    color: '0369a1',
    logoColor: 'white',
    logo: 'tailwindcss'
  },
  {
    tech: 'PostgreSQL',
    color: '316192',
    logoColor: 'white',
    logo: 'postgresql'
  },
  { tech: 'Nodejs', color: '43853d', logoColor: 'white', logo: 'Node.js' },
  { tech: 'Insomnia', color: '5849BE', logoColor: 'white', logo: 'insomnia' },
  {
    tech: 'Apollo GraphQL',
    color: '311C87',
    logoColor: 'white',
    logo: 'apollo-graphql'
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
  { tech: 'Amazon S3', color: '569A31', logoColor: 'white', logo: 'Amazon S3' },
  {
    tech: 'Styled Components',
    color: 'db7092',
    logoColor: 'white',
    logo: 'styled-components'
  },
  { tech: 'NestJs', color: 'ea2845', logoColor: 'white', logo: 'nestjs' },
  { tech: 'Prettier', color: 'F7B93E', logoColor: 'black', logo: 'prettier' },
  { tech: 'npm', color: 'CB3837', logoColor: 'white', logo: 'npm' },
  { tech: 'pnpm', color: 'F69220', logoColor: 'white', logo: 'pnpm' },
  { tech: 'Git', color: 'F05032', logoColor: 'white', logo: 'git' }
]
const badgeUrls = badges.map((badge) =>
  generateBadgeUrl(badge.tech, badge.logo, badge.color, badge.logoColor)
)
const TOOLS = [
  {
    name: 'Background gradients',
    url: 'https://www.jhangmez.xyz/tools/gradientcolor',
    image:
      'https://www.jhangmez.xyz/api/img?width=260&height=200&title=Background%20gradients&description=null&bg=2d089a&color=ffffff'
  },
  {
    name: 'Voice to text',
    url: 'https://www.jhangmez.xyz/tools/voicetospeech',
    image:
      'https://www.jhangmez.xyz/api/img?width=260&height=200&title=Voice%20to%20Text&description=null&bg=0F1A1F&color=8ECEF9'
  },
  {
    name: 'Conceptual maps',
    url: 'https://www.jhangmez.xyz/tools/mapaconceptual',
    image:
      'https://www.jhangmez.xyz/api/img?width=260&height=200&title=Conceptual%20maps&description=null&bg=181211&color=D1D0CF'
  }
]
const toolUrls = generateToolUrl(TOOLS)

let DATA = {
  name: 'Jhan Gómez',
  date: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'America/Lima'
  }),
  badges: badgeUrls.join(''),
  tools: toolUrls
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
