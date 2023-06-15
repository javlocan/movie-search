'use server'
import { type IMovie } from './api.model'

export const getMoviesList = async (query: string): Promise<IMovie[]> => {
  // LA QUERY STANDARD PIDE LAS NOVEDADES
  console.log('QUERY:', query)
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return await fetch(`https://${process.env.VERCEL_URL}/api/movies-list` + query,
    { method: 'GET' }).then(async res => await res.json())
}
