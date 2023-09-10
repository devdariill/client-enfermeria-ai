import ListOfOffers from './components/ListOfOffers'
import { getOffers } from './services/getOffers'

export default async function Home () {
  const listOfOffers = await getOffers()
  console.log(listOfOffers)

  return (
    <main className='mx-auto px-4 max-w-[1500px] pb-24'>
      <ListOfOffers offers={listOfOffers} />
    </main>
  )
}
