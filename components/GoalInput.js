import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    ProgressViewIOSComponent,
} from 'react-native';
const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAdd(enteredText);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsRow}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        width: '80%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 10,
    },
    buttonsRow: {
        flexDirection: 'row',
        marginVertical: '10%',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    },
});

export default GoalInput;
