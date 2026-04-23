'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return

    let mx = 0,
      my = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.left = mx + 'px'
      cursor.style.top = my + 'px'
      setTimeout(() => {
        if (trail) {
          trail.style.left = mx + 'px'
          trail.style.top = my + 'px'
        }
      }, 80)
    }

    const onEnter = () => cursor.classList.add('expand')
    const onLeave = () => cursor.classList.remove('expand')

    document.addEventListener('mousemove', onMouseMove)

    // Use event delegation so dynamically added elements are covered
    document.addEventListener('mouseover', (e) => {
      const target = e.target as Element
      if (target.closest('a, button, .proj, .stack-item')) onEnter()
    })
    document.addEventListener('mouseout', (e) => {
      const target = e.target as Element
      if (target.closest('a, button, .proj, .stack-item')) onLeave()
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
    </>
  )
}
