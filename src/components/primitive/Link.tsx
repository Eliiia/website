interface LinkProps {
  children: React.ReactNode
  href: string
}

export default function Link({ children, href }: LinkProps) {
  return (
    <a href={href} className="text-blue">
      {children}
    </a>
  )
}
