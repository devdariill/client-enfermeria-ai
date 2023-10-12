'use client'
import { AreaChart, Card, Title } from '@tremor/react'

// const chartdata = [
//   {
//     date: 'Jan',
//     2022: 2890,
//     2023: 2338
//   },
//   {
//     date: 'Feb',
//     2022: 2756,
//     2023: 2103
//   },
//   {
//     date: 'Mar',
//     2022: 3322,
//     2023: 2194
//   },
//   {
//     date: 'Apr',
//     2022: 3470,
//     2023: 2108
//   },
//   {
//     date: 'May',
//     2022: 3475,
//     2023: 1812
//   },
//   {
//     date: 'Jun',
//     2022: 3129,
//     2023: 1726
//   }
// ]

const dataFormatter = (number: number) => {
  // return '# ' + Intl.NumberFormat('us').format(number).toString()
  return Intl.NumberFormat('us').format(number).toString()
}

// let toChart: Map<number, ToChart> = new Map()

// Ensure that you call fetchData somewhere in your code to populate the 'toChart' Map.
const AreaChartCard = ({ areaChart }: { areaChart: JSONData[] }) => {
  // console.log('🚀 ~ file: Areachart.tsx:70 ~ AreaChartCard ~ data:', data)
  const actualYear = new Date().getFullYear()
  return (
    <Card>
      <Title>Registros de historias vs pacientes {actualYear - 1}-{actualYear}</Title>
      <AreaChart
        className='h-72 mt-4'
        data={areaChart}
        index='date'
        categories={['terceros', 'historias']}
        colors={['indigo', 'cyan']}
        valueFormatter={dataFormatter}
      />
    </Card>
  )
}
export default AreaChartCard

interface JSONData {
  date: string
  terceros: number
  historias: number
}
