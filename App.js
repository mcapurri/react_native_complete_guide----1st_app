import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            { id: Math.random().toString(), value: enteredGoal },
        ]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput
                enteredGoal={enteredGoal}
                goal={goalInputHandler}
                add={addGoalHandler}
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={(itemData) => (
                    <GoalItem title={itemData.item.value} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});
