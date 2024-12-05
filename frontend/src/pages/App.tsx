// ===============================< IMPORTS: REACT >===============================================
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// ===============================< IMPORTS: LAYOUT >==============================================


// ===============================< IMPORTS: OTHER >===============================================


// ===============================< IMPORTS: PAGES >===============================================
import Landing from '@/pages/Landing/Landing'
import About from '@/pages/About/About'
import ScreenSwap from '@/pages/ScreenSwap/ScreenSwap'
import Portfolio from '@/pages/Portfolio/Portfolio'

// ===============================< IMPORTS: COMPONENTS >==========================================


// ===============================< IMPORTS: CSS >=================================================
import '../styles/global.scss'



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/ScreenSwap" element={<ScreenSwap />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

