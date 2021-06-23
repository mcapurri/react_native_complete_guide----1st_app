import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
const GoalInput = ({ enteredGoal, goal, add }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Course Goal"
                style={styles.input}
                onChangeText={goal}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={add} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 10,
    },
});

export default GoalInput;
