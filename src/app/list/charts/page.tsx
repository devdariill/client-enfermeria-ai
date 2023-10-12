import { areaChartServer } from '@/hooks/area-chart-server'
import AreaChartCard from './components/Areachart'
import { BarChart } from './components/Barchart'
import { BarChartColors } from './components/BarchartColors'
import CardComponent from './components/Card'

// export const dynamic = 'force-dynamic'
export const revalidate = 60 * 10

async function Page () {
  const areaChart = await areaChartServer()
  console.log('🚀 ~ file: page.tsx:12 ~ Page ~ areaChart:', areaChart)
  // TODO get data from server and pass it to the component
  return (
    <section className='p-5'>
      <div className='grid gap-5'>
        <CardComponent />
        <AreaChartCard areaChart={areaChart} />
        <BarChart />
        <BarChartColors />
      </div>
    </section>
  )
}

export default Page
