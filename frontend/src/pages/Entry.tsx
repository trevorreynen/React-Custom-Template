// ===============================< IMPORTS: REACT >===============================================
import React from 'react'
import { createRoot } from 'react-dom/client'

// ===============================< IMPORTS: OTHER >===============================================
import { CommonStoreProvider } from '@/hooks/common-context'
import { EventBusProvider } from '@/hooks/use-event-bus'

// ===============================< IMPORTS: PAGES >===============================================
import App from './App'


const root = document.getElementById('root')
if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <CommonStoreProvider>
        <EventBusProvider>
          <App />
        </EventBusProvider>
      </CommonStoreProvider>
    </React.StrictMode>
  )
}

