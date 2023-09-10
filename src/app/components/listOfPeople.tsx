'use client'
import { People } from '@/app/types'
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'
import { Fragment } from 'react'

export const ListOfPeople = ({ people }: { people: People[] }) => {
  return (
    <Card className='my-5'>
      <header>
        <h1 className='text-2xl font-bold'>Ultimos Pacientes {people.length}</h1>
      </header>

      <Table className='mt-6'>
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
                  <Button>
                    Revisar oferta
                  </Button>
                </TableCell>
              </TableRow>
              {/* <Score {...scores[item.id]} /> */}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
