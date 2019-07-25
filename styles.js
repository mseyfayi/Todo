import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    checked: {
        textDecorationLine: 'line-through',
    },

    item:{
        fontSize: 20,
        alignSelf:'center'
    },

    active: {
        backgroundColor: 'blue',
    },

    disactive: {
        backgroundColor: 'skyblue',
    },

    buttonText:{
        color: 'white',
        fontSize: 15,
    },

    footerButton:{
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
        flex: 5,
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
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
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    input: {
        margin: 5,
        width: 200,
        height:50,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
    },
});
