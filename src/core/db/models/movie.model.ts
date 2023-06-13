import { type IMovie } from '@/src/core/getMoviesList/api/api.model'
import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema<IMovie>({
  _id: { $oid: { type: String } },
  plot: { type: String },
  genres: [{ type: String }],
  runtime: { type: Number },
  cast: [{ type: String }],
  num_mflix_comments: { type: Number },
  title: { type: String },
  fullplot: { type: String },
  countries: [{ type: String }],
  released: { type: Date },
  directors: [{ type: String }],
  rated: { type: String },
  awards: { wins: { type: Number }, nominations: { type: Number }, text: { type: String } },
  lastupdated: { type: String },
  year: { type: Number },
  imdb: { rating: { type: Number }, votes: { type: Number }, id: { type: Number } },
  type: { type: String },
  tomatoes: { viewer: { rating: { type: Number }, numReviews: { type: Number }, meter: { type: Number } }, lastUpdated: { type: Date } }
},
{
  collection: 'movies'
})

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const Movie = mongoose.models.Movie || mongoose.model('Movie', userSchema)

export default Movie
