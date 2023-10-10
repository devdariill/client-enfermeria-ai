'use client'
import api from '@/api'
import type { JSONData } from '@/app/list/charts/hooks/area-chart'
import { createContext, useContext, useState } from 'react'

export const StatsContext = createContext< StatsContextType | undefined >(undefined)

export function useStats () {
  const context = useContext(StatsContext)
  if (context === undefined) {
    throw new Error('useStats must be used within a StatsProvider')
  }
  return context
}

export function StatsProvider ({ children }: { children: React.ReactNode }) {
  // const [data, setData] = useState<Map<number, ToChart>>()
  const [chartData, setChartData] = useState<JSONData[]>([])

  const colorsChart = async ({ setData }: { setData: (data: any) => void }) => {
    const data = await api.stats.all()
    // console.log('🚀 ~ file: statsContext.tsx:39 ~ colorsChart ~ data:', data)
    setData(data)
  }
  const loadAreaChartData = async () => {
    const data = await api.stats.areaChart()
    setChartData(data)
  }
  return (
    <StatsContext.Provider value={{
      colorsChart,
      loadAreaChartData,
      chartData
    }}
    >
      {children}
    </StatsContext.Provider>
  )
}

interface StatsContextType {
  colorsChart: ({ setData }: { setData: (data: any) => void }) => void
  loadAreaChartData: () => Promise<any>
  chartData: JSONData[]
}
