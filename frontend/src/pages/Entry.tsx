// @/pages/Entry.tsx

// ====================< IMPORTS: REACT >=================================
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// ====================< IMPORTS: LAYOUT >================================
import MuiThemeWrapper from '@/layouts/MuiThemeWrapper'

// ====================< IMPORTS: PAGES >=================================
import App from '@/pages/App'

// ====================< IMPORTS: COMPONENTS >============================

// ====================< IMPORTS: TYPES >=================================

// ====================< IMPORTS: CONTEXTS/HOOKS >========================
import { ThemeProvider } from '@/contexts/ThemeContext'

// ====================< IMPORTS: UTILS >=================================

// ====================< IMPORTS: OTHER >=================================

// ====================< IMPORTS: STYLES >================================


const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <ThemeProvider>
        <MuiThemeWrapper>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MuiThemeWrapper>
      </ThemeProvider>
    </React.StrictMode>
  )
}
