import Card from '../components/Card'

export default function Page ({ params }: { params: { id: string } }) {
  console.log(params)
  return (
    <div className='h-full'>
      My Post: {params.id}
      <Card />
    </div>
  )
}
