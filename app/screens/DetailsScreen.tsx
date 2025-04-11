import {Text, Image, StyleSheet, View, StatusBar} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {useEffect, useState} from "react";
import Schedule from "@/app/data/Schedule";
import movieService from "@/app/services/movieService";
import ScheduleList from "@/app/components/ScheduleList";
import {useNavigation} from "@react-navigation/native";
import MoreButton from "@/app/components/CinemaButton";

export default function DetailsScreen() {
    const navigation = useNavigation();
    const {titulo, imagen, link, type} = useLocalSearchParams();

    const [schedules, setSchedules] = useState<Schedule[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const schedules = await movieService.getMovieSchedules(type as string, link as string);

            const prioritizedSchedules = schedules.sort((a, b) => {
                const priorityA = a.sede === "Cinemark San Miguel" ? -2 :
                    (a.sede === "CP Salaverry" || a.sede === "CP San Miguel" ? -1 : 1);

                const priorityB = b.sede === "Cinemark San Miguel" ? -2 :
                    (b.sede === "CP Salaverry" || b.sede === "CP San Miguel" ? -1 : 1);

                return priorityA - priorityB;
            });

            setSchedules(prioritizedSchedules);
        }

        navigation.setOptions({
            title: "Horarios 📅", headerStyle: {
                backgroundColor: "#14171c",
            },
            headerTintColor: "#9ca9b6",
            headerTitleStyle: {
                fontWeight: "bold",
            },
        });

        fetchData().then();
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} translucent={true} />
            <View style={styles.movie}>
                <Image 
                    source={{uri: Array.isArray(imagen) ? imagen[0] : imagen}} 
                    style={styles.image} 
                    resizeMode="cover"
                />
                <View style={styles.text}>
                    <Text style={styles.title}>{titulo}</Text>
                    <MoreButton link={link as string} />
                </View>
            </View>

            <ScheduleList schedules={schedules}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#14171c'
    },
    movie: {
        flexDirection: "row",
        marginBottom: 20,
    },
    text:{
        flex: 1,
        alignSelf: "center",
    },
    image: {
        width: 200,
        height: undefined,
        aspectRatio: 2/3,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#9ca9b6",
        textAlign: "center",
    },
    link: {
        fontSize: 16,
        color: "blue",
    },
});
