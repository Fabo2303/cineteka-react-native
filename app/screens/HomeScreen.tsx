import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useEffect, useState} from "react";

import MovieList from "@/app/components/MovieList";
import {useNavigation} from "@react-navigation/native";
import Movie from "@/app/data/Movie";
import storageService from "@/app/services/storageService";


export default function HomeScreen() {
    const navigation = useNavigation();
    const [mMovies, setmMovies] = useState<Movie[]>([]);
    const [pMovies, setpMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const movies: Movie[] = await storageService.getMovies()
            setmMovies(movies.filter(movie => movie.type === "m"));
            setpMovies(movies.filter(movie => movie.type === "p"));
        }

        navigation.setOptions(
            {
                title: "Cineteka 🍿",
                headerStyle: {
                    backgroundColor: "#14171c",
                },
                headerTintColor: "#9ca9b6",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }
        )

        fetchData().then();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} translucent={true} />
            <Text style={styles.title}>P 🌐</Text>
            <MovieList movies={pMovies}/>

            <Text style={styles.title}>M 🎬</Text>
            <MovieList movies={mMovies}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14171c'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
        color: '#9ca9b6'
    }
});