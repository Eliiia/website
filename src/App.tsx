import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'

function App() {
  const path = window.location.pathname

  return (
    <Layout>
      {path === '/' && <Home />}
      {path === '/contact' && <Contact />}
    </Layout>
  )
}

export default App
