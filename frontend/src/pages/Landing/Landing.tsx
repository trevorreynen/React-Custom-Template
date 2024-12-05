// ===============================< IMPORTS: REACT >===============================================


// ===============================< IMPORTS: LAYOUT >==============================================


// ===============================< IMPORTS: OTHER >===============================================


// ===============================< IMPORTS: PAGES >===============================================


// ===============================< IMPORTS: COMPONENTS >==========================================


// ===============================< IMPORTS: CSS >=================================================


// =====<  React Imports  >=======================
import { Link } from 'react-router-dom'

// =====<  Other Imports  >=======================

// =====<  Import CSS  >==========================
import './Landing.scss'

// =====<  Components  >==========================



export default function Index() {
  return (
    <div className='Index'>
      <div className='centered-button'>

        <div className='upper'>
          <h1>Landing Page!</h1>
          <p>'/' = Route</p>
          <p>(a.k.a. http://localhost:3000/)</p>
        </div>

        <Link to='/About'>
          <button>Click here to go to the About page</button>
        </Link>

      </div>
    </div>
  )
}
