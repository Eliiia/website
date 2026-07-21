export default function CenterNavBar() {
  const links = [
    { name: 'home', path: '/' },
    { name: 'contact', path: '/contact' },
    { name: 'CV', path: '/static/CV.pdf' },
  ]

  return (
    <nav className="sm:flex sm:justify-center bg-dark text-light">
      <div className="sm:w-3/4 md:w-1/2 w-full py-2 flex">
        {links.map(({ name, path }) => (
          <a href={path}>
            <div className="mx-6 w-20 text-center">{name}</div>
          </a>
        ))}
      </div>
    </nav>
  )
}
