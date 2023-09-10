import {
  TrendingDownIcon,
  TrendingUpIcon
} from '@heroicons/react/solid'
import { Callout, Card, CategoryBar, Flex, Metric, TableCell, TableRow, Text } from '@tremor/react'

const subCategoryPercentageValues = [10, 25, 45, 20]

export function Score (props: {
  score: number
  message: string
}) {
  const { score, message } = props

  if (score == null) return null

  return (
    <TableRow className='flex'>
      <TableCell colSpan={4}>

        <Flex>
          <Card>
            <Text>Puntuación</Text>
            <Flex
              justifyContent='start'
              alignItems='baseline'
              className='space-x-1'
            >
              <Metric>{score}</Metric>
              <Text>/ 10</Text>
            </Flex>
            <CategoryBar
              categoryPercentageValues={subCategoryPercentageValues}
              colors={['rose', 'orange', 'yellow', 'emerald']}
              percentageValue={score / 10 * 100}
              tooltip={`${score}`}
              showLabels={false}
              className='mt-5'
            />
          </Card>

          <Callout
            className='max-w-md whitespace-pre-wrap'
            title='Resultado del análisis'
            icon={score > 5 ? TrendingUpIcon : TrendingDownIcon}
            color={score > 5 ? 'emerald' : 'rose'}
          >
            {message}
          </Callout>
        </Flex>

      </TableCell>
    </TableRow>
  )
}
