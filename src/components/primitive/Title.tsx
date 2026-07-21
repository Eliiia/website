interface TitleProps {
  children: React.ReactNode
}

export default function Button({ children }: TitleProps) {
  return <h1 className="text-3xl font-bold underline py-2">{children}</h1>
}
