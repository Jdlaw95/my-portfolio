'use client'

import { useEffect, useRef } from 'react'

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = loaderRef.current
    if (!loader) return

    const timeout = setTimeout(() => {
      loader.classList.add('gone')
    }, 1400)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div id="loader" ref={loaderRef}>
      <div className="loader-name">
        <span>Jason </span>
        <span>Lawrence</span>
      </div>
      <div className="loader-bar-wrap">
        <div className="loader-bar" />
      </div>
    </div>
  )
}
