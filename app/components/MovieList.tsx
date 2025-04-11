import {StyleSheet, ScrollView} from "react-native";
import MovieCard from "@/app/components/MovieCard";
import Movie from "@/app/data/Movie";

interface MovieListProps {
    movies: Movie[]
}

export default function MovieList({movies}: MovieListProps) {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}

        >
            {movies.map((movie, index) => (
                <MovieCard key={index} {...movie} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    }
});