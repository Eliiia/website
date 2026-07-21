import Link from '../primitive/Link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

interface SocialLink {}

export default function SocialLinks({}: SocialLink) {
  const socials = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/eliawiekiera',
      image: faLinkedin,
    },
    {
      name: 'GitHub',
      link: 'https://www.github.com/Eliiia',
      image: faGithub,
    },
  ]

  return (
    <div className="flex gap-4">
      {socials.map(({ name, link, image }) => {
        return (
          <Link href={link}>
            <FontAwesomeIcon
              icon={image}
              aria-label={`${name} logo`}
            ></FontAwesomeIcon>
          </Link>
        )
      })}
    </div>
  )
}
