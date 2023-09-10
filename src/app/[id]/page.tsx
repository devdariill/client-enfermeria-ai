import api from '@/app/api'
import Card from '../components/Card'
// import data from '../mock/data.json'
const data = api.data.people()
console.log('🚀 ~ file: page.tsx:6 ~ data:', data)

export default function Page ({ params }: { params: { id: string } }) {
  const nursingRecords = data.filter((item) => item.patient_id === +params.id)[0].nursing_records
  return (
    <div className='h-full'>
      {/* My Post: {params.id} */}
      <Card nursingRecords={nursingRecords} />
    </div>
  )
}
