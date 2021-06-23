import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#ccc',
        padding: 10,
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 10,
    },
});

export default GoalItem;
