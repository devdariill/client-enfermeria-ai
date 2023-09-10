'use client'

import { People } from '@/app/types'
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'

export const ListOfPeople = ({ people }: { people: People[] }) => {
  const router = useRouter()
  return (
    <Card className='my-5'>
      <header>
        <h1 className='text-2xl font-bold'>Ultimos Pacientes {people.length}</h1>
      </header>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Nombre</TableHeaderCell>
            <TableHeaderCell>Edad</TableHeaderCell>
            <TableHeaderCell>Diagnostico</TableHeaderCell>
            <TableHeaderCell className='text-center'>Acción</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {people.map(item => (
            <Fragment key={item.patient_id}>
              <TableRow
                className='transition-colors cursor-pointer hover:bg-sky-300'
              >
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell>{item.diagnosis}</TableCell>
                <TableCell className='text-center'>
                  <Button
                    onClick={() => router.push(`/${item.patient_id}`)}
                  >
                    Revisar Historial ({item.nursing_records.length})
                  </Button>
                </TableCell>
              </TableRow>
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
