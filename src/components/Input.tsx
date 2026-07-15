interface ButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ type }: ButtonProps) {
  return <input type={type} className="bg-grey p-2 m-2 rounded-lg min-w-24" />
}
