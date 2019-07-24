import React from "react";
import {TodoList} from "./TodoList";
import {Footer} from "./Footer";
import {Form} from "./Form";
import {View} from 'react-native';
import {styles} from "./App";


export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', status: 'All'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.itemToggle = this.itemToggle.bind(this);
        this.clickFooter = this.clickFooter.bind(this);
        this.classNameFooter = this.classNameFooter.bind(this);
    }

    setStatus(status) {
        this.setState({status});
    }

    render() {
        return <View style={styles.container}>
            <Form text={this.state.text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <TodoList items={this.state.items} status={this.state.status}/>
            <Footer clickFooter={this.clickFooter} classNameFooter={this.classNameFooter}/>
        </View>;
    }

    clickFooter(inputStatus) {
        this.setStatus(inputStatus)
    }

    classNameFooter(inputStatus) {
        return this.state.status === inputStatus ? styles.active : styles.disactive;
    }

    handleChange(text) {
        this.setState({text});
    }

    handleSubmit() {
        if (!this.state.text.length) {
            return;
        }

        const newItem = {
            text: this.state.text,
            isChecked: false,
            id: "" + Date.now(),
            toggle: this.itemToggle
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    }

    itemToggle(item) {
        this.setState({
            items: this.state.items.map(value => {
                if (value.id === item.id) {
                    return {...value, isChecked:!value.isChecked}
                }
                return value;
            })
        });
    }
}