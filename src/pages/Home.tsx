import SocialLinks from '../components/composite/SocialLinks'
import Button from '../components/primitive/Button'
import Input from '../components/primitive/Input'
import Link from '../components/primitive/Link'
import Title from '../components/primitive/Title'

export default function Home() {
  return (
    <>
      <Title>Hi!</Title>
      <p>I'm Elia, and this is my very incomplete site!</p>
      <p>
        You can contact me on <Link href="/contact">the contact page</Link>
      </p>
      <SocialLinks />
      <Title>Projects</Title>
    </>
  )
}
