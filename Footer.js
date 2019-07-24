import React from "react";
import {FooterButton} from "./FooterButton";
import {View} from 'react-native';
import {styles} from "./App";

export class Footer extends React.Component {

    render() {
        const all = 'All';
        const todo = 'Todo';
        const done = 'Done';

        return <View style={styles.footer}>
            <FooterButton text={all} click={e => this.props.clickFooter(all)}
                          className={this.props.classNameFooter(all)}/>

            <FooterButton text={todo} click={e => this.props.clickFooter(todo)}
                          className={this.props.classNameFooter(todo)}/>

            <FooterButton text={done} click={e => this.props.clickFooter(done)}
                          className={this.props.classNameFooter(done)}/>
        </View>
    }
}