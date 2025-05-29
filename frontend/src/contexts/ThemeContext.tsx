// import { ThemeContext, ThemeProvider } from '@/contexts/ThemeContext'

// ====================< IMPORTS: REACT >=================================
import { createContext, useState, useEffect, useCallback, ReactNode } from 'react'

// ====================< IMPORTS: LAYOUT >================================

// ====================< IMPORTS: PAGES >=================================

// ====================< IMPORTS: COMPONENTS >============================

// ====================< IMPORTS: TYPES >=================================
import { ThemePreference, ThemeState } from '@/types'

// ====================< IMPORTS: CONTEXTS/HOOKS >========================

// ====================< IMPORTS: UTILS >=================================

// ====================< IMPORTS: OTHER >=================================

// ====================< IMPORTS: STYLES >================================


// Create Context.
export const ThemeContext = createContext<ThemeState>({
  theme: 'dark',
  setTheme: () => {}
})


// Theme State Provider
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Get stored theme from local storage.
  const getStoredTheme = (): ThemePreference => {
    return (localStorage.getItem('theme-preference') as ThemePreference) || 'system'
  }

  // Local theme state.
  const [theme, setThemeState] = useState<ThemePreference>(getStoredTheme())

  const applyThemeToDOM = (value: ThemePreference) => {
    const resolved = value === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      : value

    document.body.setAttribute('data-theme', resolved)
  }

  // setTheme callback to prevent re-renders in memoized child components.
  const setTheme = useCallback((value: ThemePreference) => {
    setThemeState(value)
    localStorage.setItem('theme-preference', value)
    applyThemeToDOM(value)
  }, [])


  // First thing that happens. On mount, gets stored theme. Then applies theme to DOM, then sets theme variable with stored value.
  useEffect(() => {
    const stored = getStoredTheme()
    applyThemeToDOM(stored)
    setThemeState(stored)
  }, [])


  // Allows all children pages/components/etc to read theme and call setTheme.
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
