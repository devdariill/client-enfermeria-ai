import { NextRequest } from 'next/server'
import { useSesionLocal } from './Session/hook/u-mariana'

export function middleware(request: NextRequest) {
  useSesionLocal()
}

export const config = {
  matcher : ['/profile'],
}