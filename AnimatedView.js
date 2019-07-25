import React from "react";
import {Animated} from "react-native";

export class AnimatedView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0)
    };

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 10,
                duration: 5000,

            }
        ).start();
    }

    render() {
        return <Animated.View
            style={
                {
                    ...this.props.style,
                    opacity: this.state.fadeAnim
                }}>
            {this.props.children}
        </Animated.View>
    }
}