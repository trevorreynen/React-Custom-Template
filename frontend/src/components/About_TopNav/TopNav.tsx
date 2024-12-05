// =====<  React/Next Imports  >==================
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// =====<  Other Imports  >=======================
import { classNames } from '@/utils/usefulFunctions'

// =====<  Import CSS  >==========================
import './TopNav.scss'

export function TopNav() {
  const [isOverlapping, setIsOverlapping] = useState(false)
  const leftRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkOverlap = () => {
      if (leftRef.current && centerRef.current && rightRef.current) {
        const leftRect = leftRef.current.getBoundingClientRect()
        const centerRect = centerRef.current.getBoundingClientRect()
        const rightRect = rightRef.current.getBoundingClientRect()

        // Check if center overlaps with left or right
        const overlapsLeft = centerRect.left < leftRect.right && centerRect.right > leftRect.left
        const overlapsRight = centerRect.right > rightRect.left && centerRect.left < rightRect.right

        setIsOverlapping(overlapsLeft || overlapsRight)
      }
    }

    // Check overlap on mount and on window resize
    checkOverlap()
    window.addEventListener('resize', checkOverlap)

    return () => {
      window.removeEventListener('resize', checkOverlap)
    }
  }, [])

  return (
    <div className='TopNav'>
      <div className='topnav-left' ref={leftRef}>
        <Link to='/'>
          <button>/  (Landing Page)</button>
        </Link>
        <Link to='/About'>
          <button>/About</button>
        </Link>
      </div>

      <div className={classNames('topnav-centered', { 'overlap': isOverlapping })}>
        <h1>React / Next.js Template</h1>
      </div>

      <div className='topnav-right' ref={rightRef}>
        <Link to='/ScreenSwap'>
          <button>/ScreenSwap</button>
        </Link>
        <Link to='/Portfolio'>
          <button>/Portfolio</button>
        </Link>
      </div>
    </div>
  )
}
