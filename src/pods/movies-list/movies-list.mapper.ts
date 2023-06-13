import { type IMovie } from '@/core/getMoviesList/api/api.model'
import { type IMovieCard } from '../../common/movie-card/movie-card.vm'

export const mapMoviesListToVM = (data: IMovie[]): IMovieCard[] => {
  return data.map(mapMovieToVM)
}

const mapMovieToVM = (data: IMovie): IMovieCard => ({
  _id: data._id.toString(),
  title: data.title,
  plot: data.plot,
  poster: data.poster,
  year: data.year,
  genres: data.genres,
  rating: data.imdb.rating,
  viewerRating: ((data.tomatoes?.viewer?.rating) != null) ? data.tomatoes.viewer?.rating : -1,
  criticRating: ((data.tomatoes?.critic?.rating) != null) ? data.tomatoes.critic.rating : -1
})
