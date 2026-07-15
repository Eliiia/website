import Button from '../components/Button'
import Input from '../components/Input'
import Title from '../components/Title'

export default function Home() {
  return (
    <>
      <Title>Hello world!</Title>
      <p>hello everyone</p>
      <Input type="number" />
      <br />
      <Button variant="blue">click her -&gt;</Button>
      <Button variant="red">click meee not him</Button>
      <Button variant="classic">Submit</Button>
    </>
  )
}
