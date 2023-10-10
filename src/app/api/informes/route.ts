import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import { getAll } from './controller'

export async function GET (request: Request) {
  const session = await getServerSession({ req: request, ...authOptions })
  if (!session) {
    return new Response('Unauthorized', { status: 401 })
  }
  // console.log('🚀 ~ file: route.ts:9 ~ GET ~ session:', session)
  const url = new URL(request.url)
  console.log("🚀 ~ file: route.ts:13 ~ GET ~ url :", url )
  const search = "/"+url.searchParams.get('search')
  console.log("🚀 ~ file: route.ts:14 ~ GET ~ search:", search)

  if (search == null) {
    return new Response('Missing search', { status: 400 })
  }
  // return NextResponse.json({
  //   page: '/informes',
  //   query: { search }
  // })

  try {
    const res = await getAll({ search })
    return NextResponse.json(res)
  } catch (e) {
    console.log(e)
    return new Response('Error Terceros', { status: 404 })
  }
}
