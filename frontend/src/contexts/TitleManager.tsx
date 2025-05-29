// import { TitleProvider, TitleContext } from '@/contexts/TitleManager'

// ====================< IMPORTS: REACT >=================================
import { createContext, ReactNode, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'

// ====================< IMPORTS: LAYOUT >================================

// ====================< IMPORTS: PAGES >=================================

// ====================< IMPORTS: COMPONENTS >============================

// ====================< IMPORTS: TYPES >=================================

// ====================< IMPORTS: CONTEXTS/HOOKS >========================

// ====================< IMPORTS: UTILS >=================================

// ====================< IMPORTS: OTHER >=================================

// ====================< IMPORTS: STYLES >================================


const TITLE_PREFIX = FRONTEND_WEBSITE_TITLE ? FRONTEND_WEBSITE_TITLE : ''


// Create Context.
export const TitleContext = createContext<(title: string, skipPrefix?: boolean) => void>(() => {})


// Title Provider.
export const TitleProvider = ({ children }: { children: ReactNode }) => {
  const observerRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const title = document.title.trim()

      if (!title) {
        throw new Error('Missing <title> tag on this page.')
      }

      if (!title.startsWith(TITLE_PREFIX)) {
        document.title = `${TITLE_PREFIX} ${title}`
      }
    })

    observer.observe(document.head, { childList: true, subtree: true })
    observerRef.current = observer

    return () => observer.disconnect()
  }, [])

  // Optional function to allow programmatic control.
  const setTitle = (rawTitle: string, skipPrefix = false) => {
    document.title = skipPrefix ? rawTitle : `${TITLE_PREFIX} ${rawTitle}`
  }

  return (
    <TitleContext.Provider value={setTitle}>
      <Helmet>
        <title>{TITLE_PREFIX} Loading...</title>
      </Helmet>
      {children}
    </TitleContext.Provider>
  )
}
