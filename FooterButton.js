import React from "react";
import {Text, TouchableOpacity} from 'react-native';
import {styles} from "./App";

export class FooterButton extends React.Component {


    render() {
        return <TouchableOpacity onPress={this.props.click} style={this.props.className}>
            <Text style={styles.buttonText}>{this.props.text}</Text>
        </TouchableOpacity>

    }
}