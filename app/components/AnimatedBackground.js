'use client'

import { useState, useEffect } from 'react'

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {/* Purple Orb */}
      <div 
        className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"
        style={{
          top: '10%',
          left: '10%',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
      
      {/* Blue Orb */}
      <div 
        className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"
        style={{
          bottom: '10%',
          right: '10%',
          animation: 'float 25s ease-in-out infinite reverse'
        }}
      />
      
      {/* Mouse Follower */}
      <div 
        className="absolute w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"
        style={{
          top: `${mousePosition.y / 10}px`,
          left: `${mousePosition.x / 10}px`,
          transition: 'all 0.3s ease-out'
        }}
      />
    </div>
  )
}