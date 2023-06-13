import { type Types } from 'mongoose'

export interface IMovie {
  _id: Types.ObjectId
  plot: string
  genres: [string]
  poster: string
  runtime: number
  cast: [string]
  num_mflix_comments: number
  title: string
  fullplot: string
  countries: [string]
  released: Date
  directors: [string]
  rated: string
  awards: { wins: number, nominations: number, text: string }
  lastupdated: string
  year: number
  imdb: { rating: number, votes: number, id: number }
  type: string
  tomatoes: { viewer?: { rating: number, numReviews: number, meter: number }
    critic?: { rating: number, numReviews: number, meter: number }
    website?: string
    rotten?: number
    production?: string
    dvd?: Date
    lastUpdated: Date }
}
