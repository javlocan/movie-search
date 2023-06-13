/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
'use server'

import mongoose from 'mongoose'
import User from './models/user.model'
import Movie from './models/movie.model'
let mongooseClient: Object | void

declare global {
  // eslint-disable-next-line no-var
  var mongooseClient: Object | void
}
const dbPath = process.env.DB != null ? process.env.DB : ''

// this is a promise
const getClient = async (): Promise<any> => {
  console.log('dbConnect >> trying to connect to Sample_MFLIX database...')
  await mongoose.connect(dbPath).catch(e => { console.error(e) })
}

const getModelsObject = (client: any): any => ({ ...client, User, Movie })

const dbConnect = async (): Promise<any> => {
  console.log('llegamos aqui?')
  if (process.env.NODE_ENV === 'development') {
    if (global.mongooseClient === undefined) {
      mongooseClient = await getClient()
      console.log('DEV dbConnect >> create mongo client and add to global object')
      global.mongooseClient = mongooseClient
      return getModelsObject(mongooseClient)
    } else {
      console.log('DEV dbConnect >> return global object mongo client')
      global.mongooseClient = mongooseClient
      return getModelsObject(mongooseClient)
    }
  }
  console.log('PROD dbConnect >> connecting to mongodb...')

  // CREAMOS UN OBJETO HIBRIDO CON LOS MODELOS COMO EXTRAS PARA USARLO FACIIIIL

  mongooseClient = await getClient()
  return { ...mongooseClient, User, Movie }
}

export default dbConnect
