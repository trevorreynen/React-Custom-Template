// ===============================< IMPORTS: REACT >===============================================


// ===============================< IMPORTS: LAYOUT >==============================================


// ===============================< IMPORTS: OTHER >===============================================


// ===============================< IMPORTS: PAGES >===============================================


// ===============================< IMPORTS: COMPONENTS >==========================================


// ===============================< IMPORTS: CSS >=================================================



// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================


// =====<  Import CSS  >==========================
import './About.scss'

// =====<  Import Components  >===================
import { TopNav } from '@/components/About_TopNav/TopNav'
import { LeftSidebar } from '@/components/About_LeftSidebar/LeftSidebar'
import { RightSidebar } from '@/components/About_RightSidebar/RightSidebar'
import { MainContent } from '@/components/About_MainContent/MainContent'
import { Footer } from '@/components/About_Footer/Footer'


export default function About() {
  return (
    <div className='About'>
      <p>About</p>

      <div className='main-wrapper'>

        <TopNav />
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
        <Footer />

      </div>

    </div>
  )
}

