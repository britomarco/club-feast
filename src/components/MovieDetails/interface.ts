
interface IMovieGernes {
    name: string
}

export interface IMovieDetails{
    id: string
}

export interface IMovieCredits {
    cast_id: string
    name: string
    character: string
    profile_path: string
    popularity: string
}

export interface IMovie {
    poster_path: string
    release_date: string
    title: string
    vote_average: string
    backdrop_path: string
    overview: string
    genres: IMovieGernes[]
}

