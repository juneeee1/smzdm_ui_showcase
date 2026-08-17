import { useEffect, useState } from 'react'
import { CaseDetailPage } from './pages/CaseDetailPage'
import { HubPage } from './pages/HubPage'

function getRoute() {
  const match = window.location.hash.match(/^#\/case\/([^/]+)/)
  return match ? { type: 'case' as const, slug: match[1] } : { type: 'hub' as const }
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const updateRoute = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', updateRoute)
    return () => window.removeEventListener('hashchange', updateRoute)
  }, [])

  return route.type === 'case' ? <CaseDetailPage slug={route.slug} /> : <HubPage />
}

export default App
