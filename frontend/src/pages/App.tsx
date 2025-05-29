// import App from '@/pages/App'

// ====================< IMPORTS: REACT >=================================
import { useRoutes, useLocation } from 'react-router-dom'

// ====================< IMPORTS: LAYOUT >================================

// ====================< IMPORTS: PAGES >=================================

// ====================< IMPORTS: COMPONENTS >============================

// ====================< IMPORTS: TYPES >=================================

// ====================< IMPORTS: CONTEXTS/HOOKS >========================

// ====================< IMPORTS: UTILS >=================================

// ====================< IMPORTS: OTHER >=================================
import { useRoutesConfig } from '@/config/routesConfig'

// ====================< IMPORTS: STYLES >================================
import '@/styles/global.scss'


export default function App() {
  const routes = useRoutesConfig()
  const location = useLocation()

  // Capture background location if we're opening a modal.
  const state = location.state as { backgroundLocation?: Location }
  const routeElements = useRoutes(routes, state?.backgroundLocation || location)

  // Render app.
  return (
    <>
      {routeElements}
    </>
  )
}
