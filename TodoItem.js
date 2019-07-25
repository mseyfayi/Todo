import React from "react";
import {Text, TouchableOpacity} from 'react-native';
import {styles} from "./styles";


export class TodoItem extends React.Component {
    render() {
        return <TouchableOpacity onPress={() => this.props.toggle(this.props)}>
            <Text style={this.getClassName()}>
                {this.props.text}
            </Text>
        </TouchableOpacity>;
    }

    getClassName() {
        const check=this.props.isChecked ? styles.checked : {};
        return {
            ...check,
            ...styles.item,
        };
    }
}