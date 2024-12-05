// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================


// =====<  Import CSS  >==========================
import './ScreenMain.scss'



export function ScreenMain() {


  return (
    <div className='ScreenWrapper'>

      <div className='primary-content'>


        <h2>Section Header</h2>

        <p>Here is the main section where you present the primary value to the user</p>


      </div>

      <div className='top-right-content'>

        <h3>Top Right Div</h3>

        <p>Dynamically disappears at 1100px width!</p>

      </div>

    </div>
  )
}
