// import { routesConfig } from '@/config/routesConfig'

// ====================< IMPORTS: REACT >=================================
import { lazy, Suspense, JSX } from 'react'
import { RouteObject } from 'react-router-dom'

// ====================< IMPORTS: LAYOUT >================================
import MainLayout from '@/layouts/MainLayout'

// ====================< IMPORTS: PAGES >=================================
const Landing = lazy(() => import('@/pages/Landing/Landing'))
const Error404 = lazy(() => import('@/pages/Error404/Error404'))

// ====================< IMPORTS: COMPONENTS >============================
import FullPageLoader from '@/components/loading/FullPageLoader'

// ====================< IMPORTS: TYPES >=================================

// ====================< IMPORTS: CONTEXTS/HOOKS >========================

// ====================< IMPORTS: UTILS >=================================

// ====================< IMPORTS: OTHER >=================================


const withSuspense = (Component: React.LazyExoticComponent<() => JSX.Element | null>) => (
  <Suspense fallback={<FullPageLoader />}>
    <Component />
  </Suspense>
)


const mainLayoutRoutes: RouteObject = {
  element: <MainLayout />,
  children: [
    { path: '', element: withSuspense(Landing) },
    { path: '*', element: withSuspense(Error404) },
  ]
}


export const useRoutesConfig = (): RouteObject[] => {
  return [mainLayoutRoutes]
}
