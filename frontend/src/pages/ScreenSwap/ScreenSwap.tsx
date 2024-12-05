// ===============================< IMPORTS: REACT >===============================================
import { useContext, useMemo } from 'react'

// ===============================< IMPORTS: LAYOUT >==============================================


// ===============================< IMPORTS: OTHER >===============================================
import { CommonStoreContext } from '@/hooks/common-context'
import { screenPages } from '@/config/enums'

// ===============================< IMPORTS: PAGES >===============================================
import { ScreenMain } from '@/components/ScreenSwap_Screen_Main/ScreenMain'
import { ScreenA } from '@/components/ScreenSwap_Screen_A/ScreenA'
import { ScreenB } from '@/components/ScreenSwap_Screen_B/ScreenB'
import { ScreenC } from '@/components/ScreenSwap_Screen_C/ScreenC'

// ===============================< IMPORTS: COMPONENTS >==========================================
import { ScreenHeader } from '@/components/ScreenSwap_ScreenHeader/ScreenHeader'
import { Sidebar } from '@/components/ScreenSwap_Sidebar/Sidebar'

// ===============================< IMPORTS: CSS >=================================================
import './ScreenSwap.scss'


export default function ScreenSwap() {

  const { screen } = useContext(CommonStoreContext)


  // Determine which screen component to render based on `screen` state
  const ScreenComponent = useMemo(() => {

    switch (screen) {
      case screenPages.Main:
        return ScreenMain
      case screenPages.A:
        return ScreenA
      case screenPages.B:
        return ScreenB
      case screenPages.C:
        return ScreenC
      default:
        return ScreenMain
    }
  }, [screen])


  return (
    <div className='ScreenSwap'>

      <ScreenHeader />

      <div className='main-wrapper'>

        <Sidebar />

        <ScreenComponent />

      </div>


    </div>
  )
}

