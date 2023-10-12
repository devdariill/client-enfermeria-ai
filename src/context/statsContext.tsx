'use client'
import api from '@/api'
import { createContext, useContext } from 'react'

export const StatsContext = createContext< StatsContextType | undefined >(undefined)

export function useStats () {
  const context = useContext(StatsContext)
  if (context === undefined) {
    throw new Error('useStats must be used within a StatsProvider')
  }
  return context
}

export function StatsProvider ({ children }: { children: React.ReactNode }) {
  const colorsChart = async ({ setData }: { setData: (data: any) => void }) => {
    const data = await api.stats.all()
    // console.log('🚀 ~ file: statsContext.tsx:39 ~ colorsChart ~ data:', data)
    setData(data)
    return data
  }
  return (
    <StatsContext.Provider value={{
      colorsChart
    }}
    >
      {children}
    </StatsContext.Provider>
  )
}

interface StatsContextType {
  colorsChart: ({ setData }: { setData: (data: any) => void }) => void
}

export interface ToChart { terceros: number, historias: number}
