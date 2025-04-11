import AsyncStorage from "@react-native-async-storage/async-storage";
import Movie from "@/app/data/Movie";

const storageService = {
    saveMovies: async (movies: Movie[]) => {
        try {
            const jsonMovies = JSON.stringify(movies);
            await AsyncStorage.setItem("movies", jsonMovies);
            const today = new Date();
            await AsyncStorage.setItem("lastUpdated", today.toISOString());
        } catch (error) {
            console.log(error);
        }
    },
    getMovies: async (): Promise<Movie[]> => {
        try {
            const jsonMovies = await AsyncStorage.getItem("movies");
            return jsonMovies ? JSON.parse(jsonMovies) : [];
        } catch (error) {
            return [];
        }
    },
    getLastUpdated: async (): Promise<Date | null> => {
        try {
            const lastUpdated = await AsyncStorage.getItem("lastUpdated");
            return lastUpdated ? new Date(lastUpdated) : null;
        } catch (error) {
            return null;
        }
    }
}

export default storageService;