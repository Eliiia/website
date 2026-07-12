import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  const path = window.location.pathname

  return <Layout>{path === '/' && <Home />}</Layout>
}

export default App
