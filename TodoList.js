import React from 'react'
import {TodoItem} from "./TodoItem";
import {FlatList, View} from 'react-native';
import {styles} from "./App";

export class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.checkItem = this.checkItem.bind(this);
    }

    render() {
        const items = this.props.items.filter(this.checkItem);
        return <View style={styles.list}>
            <FlatList
                data={items}
                renderItem={({item}) => <TodoItem {...item} isChecked={item.isChecked}/>}
                keyExtractor={(item, index) => item.id}
            />
        </View>
    }

    checkItem(item) {
        if (this.props.status === "All") {
            return true;
        } else if (this.props.status === "Todo") {
            return !item.isChecked;
        } else if (this.props.status === "Done") {
            return item.isChecked;
        }
    }
}