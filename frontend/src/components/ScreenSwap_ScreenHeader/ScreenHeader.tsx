// =====<  React/Next Imports  >==================


// =====<  Other Imports  >=======================
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import './ScreenHeader.scss'



export function ScreenHeader() {


  return (
    <header className='ScreenHeader'>

      <div className='header-left'>
        <div className='title'>
          <h2>Warframe Checklist</h2>
        </div>
      </div>


      <div className='header-right'>
        <div className='window-controls'>
          <button className='window-control minimize' />

          <button className='window-control maximize' />

          <button className='window-control close' />
        </div>
      </div>
    </header>
  )
}
