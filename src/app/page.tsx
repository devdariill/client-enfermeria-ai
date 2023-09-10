import data from '@/app/mock/data.json'
import { ListOfPeople } from './components/listOfPeople'
import { People } from './types'

export default async function Home () {
  return (
    <main className='mx-auto px-4 max-w-[1500px] pb-24'>
      <ListOfPeople people={data as unknown as People[]} />
    </main>
  )
}
