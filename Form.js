import React from "react";
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from "./App";


export class Form extends React.Component {
    render() {
        return <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder='What you want to do?'
                onChangeText={this.props.handleChange}
                value={this.props.text}/>
            <TouchableOpacity onPress={this.props.handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>submit</Text>
            </TouchableOpacity>
        </View>
    }
}