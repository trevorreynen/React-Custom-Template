// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================


// =====<  Import CSS  >==========================
import './ScreenA.scss'



export function ScreenA() {


  return (
    <div className='ScreenWrapper'>


      <div className='primary-content'>

        <h2>Tab A</h2>

      </div>

      <div className='top-right-content'>

        <h3>Top Right Div</h3>

        <p>Dynamically disappears at 1100px width!</p>

      </div>


    </div>
  )
}
