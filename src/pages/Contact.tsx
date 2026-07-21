import { useState } from 'react'
import Button from '../components/primitive/Button'
import Input from '../components/primitive/Input'
import Title from '../components/primitive/Title'

export default function Contact() {
  const webhookUrl =
    'https://discord.com/api/webhooks/1529196312547819611/W62DsO8_HGc4yyG80U5gTE_kvmkPYwVoTdm_pTKsK9EZGwehbQFiUCjrHyg1LiRpe34a'
  const [user, setUser] = useState('')
  const [content, setContent] = useState('')

  const sendWebhook = () => {
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: user,
        content: `${content}\n\n<@257482333278437377>`,
      }),
    }).then((res) => {
      console.log('success')
    })
  }

  return (
    <>
      <Title>Contact</Title>
      <p></p>
      <Input
        type="text"
        placeholder="Your name"
        onChangeValue={(v) => setUser(v)}
      />
      <Input
        type="textbox"
        placeholder="Your message"
        wide
        onChangeValue={(v) => setContent(v)}
      />
      <br />
      <Button variant="blue" onClick={sendWebhook}>
        Send
      </Button>
    </>
  )
}
