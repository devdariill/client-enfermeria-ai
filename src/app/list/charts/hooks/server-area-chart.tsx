'use server'

import api from '@/api'

async function ServerAreaChart () {
  const data = await api.stats.areaChart()

  return data
}

export default ServerAreaChart
