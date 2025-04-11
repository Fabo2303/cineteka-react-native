import {StyleSheet, ScrollView} from "react-native";
import Schedule from "@/app/data/Schedule";
import ScheduleCard from "@/app/components/ScheduleCard";

interface ScheduleListProps {
    schedules: Schedule[]
}

export default function ScheduleList({schedules}: ScheduleListProps) {
    return (
        <ScrollView
            style={styles.container}>
            {schedules.map((schedule, index) => (
                <ScheduleCard key={index} {...schedule} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});