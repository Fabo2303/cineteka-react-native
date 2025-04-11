import { TouchableOpacity, Text, Linking, StyleSheet } from "react-native";

interface MoreButtonProps {
    link: string;
}

export default function MoreButton({ link }: MoreButtonProps) {
    const handlePress = () => {
        Linking.openURL(link).catch((err) =>
            console.error("No se pudo abrir el enlace", err)
        );
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.text}>Ver más</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#FF5733",
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        width: '100%'
    },
    text: {
        width: '100%',
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
});
