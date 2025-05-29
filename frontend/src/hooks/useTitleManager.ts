// import { useTitleManager } from '@/hooks/useTitleManager'

// ====================< IMPORTS: REACT >=================================
import { useContext } from 'react'

// ====================< IMPORTS: LAYOUT >================================

// ====================< IMPORTS: PAGES >=================================

// ====================< IMPORTS: COMPONENTS >============================

// ====================< IMPORTS: TYPES >=================================

// ====================< IMPORTS: CONTEXTS/HOOKS >========================
import { TitleContext } from '@/contexts/TitleManager'

// ====================< IMPORTS: UTILS >=================================

// ====================< IMPORTS: OTHER >=================================

// ====================< IMPORTS: STYLES >================================


// Hook to programmatically set the page title with prefix.
export const useTitleManager = () => {
  return useContext(TitleContext)
}
