import { areaChartServer } from '@/hooks/area-chart-server'
import { allColors } from '@/hooks/colors-chart-server'
import AreaChartCard from './components/Areachart'
import { BarChart } from './components/Barchart'
import { BarChartColors } from './components/BarchartColors'
import CardComponent from './components/Card'

// export const dynamic = 'force-dynamic'
export const revalidate = 60

async function Page () {
  const areaChart = await areaChartServer()
  console.log('🚀 ~ file: page.tsx:12 ~ Page ~ areaChart:', areaChart)
  const colorsChart = await allColors()
  // TODO get data from server and pass it to the component
  return (
    <section className='p-5'>
      <div className='grid gap-5'>
        <CardComponent />
        <AreaChartCard areaChart={areaChart} />
        <BarChart />
        <BarChartColors colorsChart={colorsChart} />
      </div>
    </section>
  )
}

export default Page
