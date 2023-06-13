
import dbConnect from '@/src/core/db/dbConnect'

import { type NextRequest, NextResponse } from 'next/server'

export async function GET (request: NextRequest): Promise<NextResponse> {
  const db = await dbConnect()
  console.log('users/route >> connected')

  const docs = await db.User
    .find()
    .sort({ name: 1 })
    .limit(10)
    .exec()

  // RETORNA UN JSON PERFECTO
  return new NextResponse(docs)
}
