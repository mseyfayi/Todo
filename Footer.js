import React from "react";
import {FooterButton} from "./FooterButton";
import {View} from 'react-native';
import {styles} from "./styles";

export class Footer extends React.Component {

    _renderButton(text) {
        return <FooterButton text={text} click={e => this.props.clickFooter(text)}
                             className={this.props.classNameFooter(text)}/>
    }

    render() {
        return <View style={styles.footer}>
            {this._renderButton("All")}
            {this._renderButton("Todo")}
            {this._renderButton("Done")}
        </View>
    }
}