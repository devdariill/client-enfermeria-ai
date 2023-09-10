'use client'
import { Badge, Button, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, Title } from '@tremor/react'
import { Fragment, useState } from 'react'
import { type Offer } from '../../types'
import { Score } from './Score'

// function ListOfOffers (props: { offers: Offer[] }) {
function ListOfOffers ({ offers }: { offers: Offer[] }) {
  console.log(offers)
  // const {offers}=props

  const [loading, setLoading] = useState<{ [key: string]: boolean }>({})
  const [scores, setScores] = useState<{ [key: string]: { score: number, message: string } }>({})

  const handleClick = async (id: string) => {
    setLoading(prevState => ({
      ...prevState,
      [id]: true
    }))

    const res = await fetch(`/api/check-description?id=${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await res.json()
    console.log(json)

    setScores(prevState => ({
      ...prevState,
      [id]: json
    }))

    setLoading(prevState => ({
      ...prevState,
      [id]: false
    }))
  }
  return (
    <Card>
      <Flex justifyContent='start' className='space-x-2'>
        <Title>Ofertas de trabajo de InfoJobs</Title>
        <Badge color='gray'>{offers.length}</Badge>
      </Flex>

      <Text className='mt-2'>Las últimas ofertas de trabajo</Text>

      <Table className='mt-6'>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Puesto</TableHeaderCell>
            <TableHeaderCell>Provincia</TableHeaderCell>
            <TableHeaderCell>Experiencia</TableHeaderCell>
            <TableHeaderCell className='text-center'>Acción</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {offers.map(item => (
            <Fragment key={item.id}>
              <TableRow
                className='transition-colors cursor-pointer hover:bg-sky-300'
                onClick={() => {
                  window.open(item.link, '_blank')
                }}
              >
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.province}</TableCell>
                <TableCell>{item.experienceMin}</TableCell>
                <TableCell className='text-center'>
                  <Button
                    disabled={Boolean(scores[item.id])}
                    loading={loading[item.id]}
                    loadingText='Revisando...'
                    onClick={async () => await handleClick(item.id)}
                  >
                    Revisar oferta
                  </Button>
                </TableCell>
              </TableRow>
              <Score {...scores[item.id]} />
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
export default ListOfOffers
