import {Redirect} from 'expo-router';
import {useEffect, useState} from "react";
import storageService from "@/app/services/storageService";
import movieService from "@/app/services/movieService";

export default function Index() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const lastUpdated = await storageService.getLastUpdated();
            const today = new Date();
            const diff = today.getTime() - (lastUpdated?.getTime() ?? 0);

            if (diff >= 1000 * 60 * 60 * 24) {
                const movies = await movieService.getMovies();
                await storageService.saveMovies(movies);
                console.log("Movies saved");
            }

            setIsReady(true);
        };

        fetchData().then();
    }, []);

    if (!isReady) return null;

    return <Redirect href="/screens/HomeScreen"/>;
}
