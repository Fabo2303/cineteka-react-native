import Movie from "@/app/data/Movie";

interface MovieResponse{
    message: string,
    peliculas: Movie[]
}

export default MovieResponse;