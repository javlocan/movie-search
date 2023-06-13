
export interface IMovieCard {
  _id: string
  title: string
  plot: string
  year: number
  rating?: number
  viewerRating?: number
  criticRating?: number
  genres: [string]
  poster: string
}
