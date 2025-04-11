import {StyleSheet, Text, View} from 'react-native';

interface ScheduleCardProps {
    sede: string;
    formato: string[];
    tipo_sala: string[];
    idioma: string[];
    horarios: string[];
}

export default function ScheduleCard(props: ScheduleCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content_row}>
                <Text style={styles.left_text}>{Array.isArray(props.sede) ? props.sede.join(', ') : props.sede}</Text>
                <Text
                    style={styles.right_text}>{Array.isArray(props.idioma) ? props.idioma.join(', ') : props.idioma}</Text>
            </View>
            <Text
                style={styles.alone_text}>{Array.isArray(props.formato) ? props.formato.join(', ') : props.formato}</Text>
            <View style={styles.content_row}>
                <Text
                    style={styles.horarios}>{Array.isArray(props.horarios) ? props.horarios.join(', ') : props.horarios}</Text>
                <Text
                    style={styles.right_text}>{Array.isArray(props.tipo_sala) ? props.tipo_sala.join(', ') : props.tipo_sala}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        backgroundColor: "#f0f0f0",
    },
    horarios: {
        fontSize: 14,
        textAlign: "left",
        width: "30%"
    },
    left_text: {
        width: '60%',
        fontSize: 14,
        textAlign: "left"
    },
    right_text: {
        width: '40%',
        fontSize: 14,
        textAlign: "right"
    },
    alone_text: {
        width: '100%',
        fontSize: 14,
        textAlign: "right"
    },
    content_row: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
});