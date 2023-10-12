import api from '@/api'
import type { ToChart } from '@/context/statsContext'

export const areaChartServer = async () => {
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

  return format(chartDataMap)
}

const format = (data: Map<number, ToChart>) => {
  const a: JSONData[] = []
  data.forEach((value, key) => {
    a.push({ date: key.toString(), terceros: value.terceros, historias: value.historias })
  })
  const sorted = a.sort((a, b) => +a.date - +b.date)
  const namingMonths = sorted.map((item) => {
    const date = new Date(Date.UTC(2023, +item.date - 1, 1))
    const monthName = date.toLocaleString('en-US', { month: 'short' })
    return { date: monthName, terceros: item.terceros, historias: item.historias }
  })
  return namingMonths
}

interface Data { mes: number, cantidad: number }

export interface JSONData {
  date: string
  terceros: number
  historias: number
}
