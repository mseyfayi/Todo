import React from "react";
import {TouchableOpacity, Text} from 'react-native';


export class FooterButton extends React.Component {
    render() {
        return <TouchableOpacity onPress={this.props.click} style={this.props.className}>
            <Text>{this.props.text}</Text>
        </TouchableOpacity>
    }
}