// =====<  React/Next Imports  >==================
import { useContext } from 'react'
import { Link } from 'react-router-dom'

// =====<  Other Imports  >=======================
import { screenPages } from '@/config/enums'
import { CommonStoreContext } from '@/hooks/common-context'
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import './Sidebar.scss'



export function Sidebar() {
  const { setScreen } = useContext(CommonStoreContext)


  return (
    <div className='Sidebar'>

      <div className='sidebar-upper'>
        <h2>Upper Section</h2>
      </div>

      <ul className='sidebar-main'>
        <li>
          <button className='menu-item menu-main' onClick={() => setScreen(screenPages.Main)}>
            <div className='icon icon-main'></div>
            <span>Main</span>
          </button>
        </li>

        <li>
          <button className='menu-item menu-a' onClick={() => setScreen(screenPages.A)}>
            <div className='icon icon-a'></div>
            <span>Tab A</span>
          </button>
        </li>


        <li>
          <button className='menu-item menu-b' onClick={() => setScreen(screenPages.B)}>
            <div className='icon icon-b'></div>
            <span>Tab B</span>
          </button>
        </li>

        <li>
          <button className='menu-item menu-c' onClick={() => setScreen(screenPages.C)}>
            <div className='icon icon-c'></div>
            <span>Tab C</span>
          </button>
        </li>
      </ul>


      <ul className='sidebar-lower'>
        <li>
          <Link to='/About'>
            <button className='menu-secondary'>
              <div className='icon icon-premium'></div>
              <span>/About</span>
            </button>
          </Link>
        </li>

        <li>
          <button className='menu-secondary menu-settings'>
            <div className='icon icon-settings'></div>
            <span>Settings</span>
          </button>
        </li>
      </ul>


    </div>
  )
}

