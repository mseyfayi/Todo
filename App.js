import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {TodoApp} from "./TodoApp";

export default class App extends Component {
    render() {
        return (
            <TodoApp/>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    checked: {
        textDecorationLine: 'line-through',
        fontSize: 20,
    },

    unchecked: {
        fontSize: 20
    },

    active: {
        backgroundColor: 'blue',
        height: 40,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,
    },

    disactive: {
        backgroundColor: 'skyblue',
        height: 40,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin:5,

    },

    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    list: {
        flex: 5
    },

    form: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    button: {
        margin: 5,
        width: 70,
        height:50,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },

    input: {
        margin: 5,
        width: 200,
        height:50,
        borderColor: 'grey',
        borderWidth: 1,
    },
});
