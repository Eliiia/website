import CenterNavBar from './CenterNavBar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CenterNavBar />
      <div className="sm:flex sm:justify-center h-full">
        <main className="sm:w-3/4 md:w-1/2 bg-white text-dark">
          <div className="p-4 sm:p-0">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  )
}
