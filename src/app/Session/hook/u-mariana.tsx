import type { Session } from 'next-auth'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const useSesionLocal = () => {
  const router = useRouter()
  const { data: sesion } = useSession()

  let can = true

  useEffect(() => {
    if (!sesion) return
    if (sesion?.user == null) {
      router.push('/Session')
    }
    can = Umariana({ sesion })
    console.log('🚀 ~ file: u-mariana.tsx:16 ~ useEffect ~ can:', can)
    if (!can) {
      router.push('/Session')

      signOut()
      // router.push('/Session/Unauthorized')
    }
    router.push('/')
  }, [sesion])
  return can
}

export const Umariana = ({ sesion }: { sesion: Session | null }) => {
  if (sesion == null) return true
  if (sesion?.user?.email !== 'gowluonade@gmail.com' && sesion?.user?.email?.split('@')[1] !== 'umariana.edu.co') {
    console.log(sesion?.user?.email !== 'gowluonade@gmail.com', sesion?.user?.email?.split('@')[1] !== 'umariana.edu.co')
    console.log('🚀 ~ file: IndexContext.tsx:84 ~ useEffect ~ session:', sesion)
    return false
  }
  return true
}
