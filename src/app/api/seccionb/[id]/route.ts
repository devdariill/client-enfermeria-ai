import { NextResponse } from 'next/server'
import { create, deleteById, getById, update } from '../controller'

export async function POST (request: Request, { params: { id } }: { params: { id: string } }) {
  const data = await request.json()
  try {
    const historia = await create(id, data)
    return NextResponse.json(historia)
  } catch (e) {
    console.log(e)
    return new Response('Error SeccionB', { status: 404 })
  }
}

export async function GET (_request: Request, { params: { id } }: { params: { id: string } }) {
  console.log('🚀 ~ file: route.ts:16 ~ GET ~ id:', id)
  try {
    const historia = await getById(id)
    if (historia.id == null) return NextResponse.json({ message: 'History not found' }, { status: 404 })
    return NextResponse.json(historia)
  } catch (error: any) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}

export async function PATCH (request: Request, { params: { id } }: { params: { id: string } }) {
  const data = await request.json()
  try {
    const historia = await update(id, data)
    console.log('🚀 ~ file: route.ts:54 ~ historia:', historia)
    return NextResponse.json(historia)
  } catch (e) {
    console.log(e)
    return new Response('Error SeccionB', { status: 404 })
  }
}

export async function DELETE (_request: Request, { params: { id } }: { params: { id: string } }) {
  try {
    const historia = await deleteById(id)
    return NextResponse.json(historia)
  } catch (error: any) {
    return NextResponse.json({ message: error }, { status: 500 })
  }
}
