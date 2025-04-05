"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface StatsCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
}

export default function StatsCounter({ icon, value, label, suffix }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // ms
    const steps = 50
    const stepValue = value / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current > value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <div className="text-4xl font-bold mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  )
}

