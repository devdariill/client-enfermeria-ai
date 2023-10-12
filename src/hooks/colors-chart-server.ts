'use server'

export const allColors = async () => {
  const res = await fetch('https://mackay-bilby-frqr.1.sg-1.fl0.io/informes/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const now = await res.json()

  const res2 = await fetch('https://mackay-bilby-frqr.1.sg-1.fl0.io/informes/all?prev_year=1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const prev = await res2.json()

  return [now, prev]
}
