/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use server'

import dbConnect from '@/src/core/db/dbConnect'

import { type NextRequest, NextResponse } from 'next/server'

export async function GET (request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams
  const filter: [Record<string, string | string[]>] = []

  const q = parseInt(searchParams.get('q') ?? '7')
  const p = parseInt(searchParams.get('p') ?? '0')
  const skip = p * q

  const genre = searchParams.get('genre')
  if (genre) filter.push({ genres: [genre] })

  const rating = searchParams.get('rating')
  if (rating) filter.push({ 'imdb.rating': rating })

  console.log('see filter', filter)

  // const sortBy = { 'imdb.rating': 'descending' }
  const sortBy = {}
  // const title1 = searchParams.get('title') // Solo puede llevar un argumento
  // const rating = searchParams.get('rating')

  const db = await dbConnect()
  console.log('movies-list/route >> connected')

  const movieslist = await db.Movie
    .find(...filter)
    .sort(sortBy)
    .skip(skip)
    .limit(q)
  // RETORNA UN JSON PERFECTO
  return NextResponse.json(movieslist)
}
