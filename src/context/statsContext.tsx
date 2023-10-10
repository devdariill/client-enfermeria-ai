'use client'
import api from '@/api'
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
  const [data, setData] = useState<Map<number, ToChart>>()
  const [chartData, setChartData] = useState<JSONData[]>([])

  const areaChart = async () => {
    // const [tercerosData, historiasData] = await Promise.all([
    //   api.stats.countByMonth({ table: 'terceros' }) as Promise<Data[]>,
    //   api.stats.countByMonth({ table: 'historias_clinicas' }) as Promise<Data[]>
    // ])
    const tercerosData = await api.stats.countByMonth({ table: 'terceros' }) as Data[]
    const historiasData = await api.stats.countByMonth({ table: 'historias_clinicas' }) as Data[]
    const chartDataMap: Map<number, ToChart> = new Map()
    tercerosData.forEach((item: Data) => {
      chartDataMap.set(item.mes, { terceros: item.cantidad, historias: 0 })
    })
    historiasData.forEach((item: Data) => {
      const chartData = chartDataMap.get(item.mes) ?? { terceros: 0, historias: item.cantidad }
      chartData.historias = item.cantidad
      chartDataMap.set(item.mes, chartData)
    })
    setData(chartDataMap)

    const a: JSONData[] = []
    chartDataMap.forEach((value, key) => {
      a.push({ date: key.toString(), terceros: value.terceros, historias: value.historias })
    })
    const sorted = a.sort((a, b) => +a.date - +b.date)
    const namingMonths = sorted.map((item) => {
      const date = new Date(Date.UTC(2023, +item.date - 1, 1))
      const monthName = date.toLocaleString('en-US', { month: 'short' })
      return { date: monthName, terceros: item.terceros, historias: item.historias }
    })
    setChartData(namingMonths)
  }

  const colorsChart = async ({ setData }: { setData: (data: any) => void }) => {
    const data = await api.stats.all()
    // console.log('🚀 ~ file: statsContext.tsx:39 ~ colorsChart ~ data:', data)
    setData(data)
  }
  return (
    <StatsContext.Provider value={{
      data,
      areaChart,
      colorsChart,
      chartData
    }}
    >
      {children}
    </StatsContext.Provider>
  )
}

interface StatsContextType {
  areaChart: () => void
  data: Map<number, ToChart> | undefined
  colorsChart: ({ setData }: { setData: (data: any) => void }) => void
  chartData: JSONData[]
}

interface Data { mes: number, cantidad: number }
export interface ToChart { terceros: number, historias: number}

export interface JSONData {
  date: string
  terceros: number
  historias: number
}

