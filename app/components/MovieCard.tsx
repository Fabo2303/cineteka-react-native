import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {useRouter} from "expo-router";

interface MovieCardProps {
    titulo: string;
    link: string;
    imagen: string;
    type: string;
}

export default function MovieCard({titulo, link, imagen, type}: MovieCardProps) {
    const router = useRouter();

    const handlePress = () => {
        router.push({
            pathname: "/screens/DetailsScreen",
            params: { titulo, imagen, link, type},
        });
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <Image
                source={{uri: imagen}}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.title}>{titulo}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    title: {
        width: '100%',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9ca9b6'
    },
    image: {
        width: 180,
        height: undefined,
        aspectRatio: 2/3,
        borderRadius: 20,
    },
});