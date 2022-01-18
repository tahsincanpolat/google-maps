import React, { Component } from 'react'
import {StyleSheet,Animated } from 'react-native'

export default class AnimatedMarker extends Component {
    state={
        animation: new Animated.Value(1)
    }
    componentDidMount(){
        this.startAnimation();
    }

    startAnimation = () =>{
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.state.animation,{
                    toValue:0.7,
                    duration:1500,
                    useNativeDriver:false
                }),
                Animated.timing(this.state.animation,{
                    toValue:1,
                    duration:1500,
                    useNativeDriver:false
                }),
            ])
        ).start();
    }

    render() {
        const animatedStyle ={
            opacity:this.state.animation,
            transform:[{
                scale:this.state.animation
            }]
        }

        return (
        //    <Animated.View style={[styles.marker,animatedStyle]}/> 
        <Animated.Image source={require('../assets/marker.png')} style={[styles.marker,animatedStyle]}/> 
        )
    }
}

const styles = StyleSheet.create({
    marker:{
        width:30,
        height:30,
        borderRadius:10,
        // backgroundColor:'#f40'
    }
})
