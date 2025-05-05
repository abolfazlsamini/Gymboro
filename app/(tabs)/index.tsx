import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Button, ScrollView } from "react-native";
import { useState } from "react";
import ExerciseItem from "@/components/ExerciseItem";
import { IExercise, ISet } from "@/data/Exercise";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";
import { Stack, useNavigation } from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();
  const defaultSet: ISet = { rep: 5, weight: 10 };
  const defaultExercise: IExercise = {
    title: "New Exercise",
    sets: [defaultSet],
  };
  const [exercises, setExercises] = useState<IExercise[]>([defaultExercise]);
  return (
    <ScrollView>
      <SafeAreaProvider>
        <SafeAreaView>
          <ThemedView>
            <ThemedText>This is a test will Remove Later</ThemedText>
            <Button title="Exercise 1" onPress={() => navigation.navigate("[workoutDetails]", { id: 1 })} />
            <Button title="Exercise 2" />
            <Button title="Exercise 3" />
          </ThemedView>
          <ThemedView style={styles.card}>
            {exercises.map((ex, index) => (
              <ExerciseItem key={index} exercise={ex} />
            ))}
            <Button
              title="Add Exercise"
              onPress={() => {
                setExercises((prevExercises) => [...prevExercises, defaultExercise]);
              }}
            />
          </ThemedView>
        </SafeAreaView>
      </SafeAreaProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 8,
    backgroundColor: "#1e1e1e",
    padding: 4,
    marginBottom: 8,
  },
});
