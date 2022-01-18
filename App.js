import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import CurrentPositions from './components/CurrentPositions'
import Markers from './components/Markers'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Markers/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})