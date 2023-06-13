
import { type IMovie } from './api.model'

export const getMoviesList = async (query: string): Promise<IMovie[]> => {
  // LA QUERY STANDARD PIDE LAS NOVEDADES
  console.log('QUERY:', query)

  return await fetch('http://localhost:3000/api/movies-list' + query,
    { method: 'GET', headers: { 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Allow-Origin': '*' } }).then(async res => await res.json())
}
