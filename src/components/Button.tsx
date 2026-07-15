interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'blue' | 'red' | 'classic'
}

export default function Button({ children, variant = 'classic' }: ButtonProps) {
  const bgColor =
    variant === 'blue' ? 'bg-blue' : variant === 'red' ? 'bg-red' : 'bg-grey'
  const textColor = variant !== 'classic' ? 'text-light' : 'text-dark'

  return (
    <button className={`${bgColor} ${textColor} p-2 rounded-lg min-w-24 m-2`}>
      {children}
    </button>
  )
}
