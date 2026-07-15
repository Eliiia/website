import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="sm:flex sm:justify-center">
        <main className="p-4 sm:w-3/4 sm:p-0 md:w-1/2 bg-white text-dark">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
