import { axios } from '../axios'

const PAGE = '/informes'
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.URL_BACK! + PAGE : 'http://localhost:3001' + PAGE

export async function getAll ({ search }: { search?: string }): Promise<any> {
    return await axios<any>(`${BASE_URL}${search}`)  
}

// export async function create (tercero: Tercero): Promise<Tercero> {
//   return await axios<Tercero>(BASE_URL, 'POST', tercero)
// }

// export async function getById (id: string): Promise<Tercero> {
//   return await axios<Tercero>(BASE_URL + id)
// }

// export async function deleteById (id: string): Promise<Tercero> {
//   return await axios<Tercero>(BASE_URL + id, 'DELETE')
// }

// export async function update (id: string, tercero: Tercero): Promise<Tercero> {
//   return await axios<Tercero>(BASE_URL + id, 'PATCH', tercero)
// }
