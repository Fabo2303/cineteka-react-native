import api from "@/app/services/api";
import Movie from "@/app/data/Movie";
import Schedule from "@/app/data/Schedule";
import MovieResponse from "@/app/data/MovieResponse";
import ScheduleResponse from "@/app/data/ScheduleResponse";

const movieService = {
    getMovies: async (): Promise<Movie[]> => {
        try {
            const response = await api.get("/peliculas");
            const movieResponse = response.data as MovieResponse;
            console.log(movieResponse.message);
            return movieResponse.peliculas
        } catch (error) {
            console.log(error);
            return [];
        }
    },
    getMovieSchedules: async (type: string, url: string): Promise<Schedule[]> => {
        try {
            const response = await api.get("/horarios", {params: {type, url}});
            const scheduleResponse = response.data as ScheduleResponse;
            console.log(scheduleResponse.message, "desde schedules");
            return scheduleResponse.horarios
        } catch (error) {
            return [];
        }
    }
}

export default movieService;