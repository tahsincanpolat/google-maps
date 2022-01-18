import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image } from 'react-native'

import MapView,{Marker} from 'react-native-maps';
import AnimatedMarker from '../components/AnimatedMarker'

export default class Markers extends Component {

    state ={
        region:{
            latitude: 40.9882681,
            longitude: 29.0343434,
            latitudeDelta: 0.095,
            longitudeDelta: 0.045,
        },
        markers :[
            {
              lating:{
                latitude: 40.9882681,
                longitude: 29.0443434,
              },
              title:'My Home',
              description:'I Love My Home'  
            },
            {
                lating:{
                  latitude: 40.9982681,
                  longitude: 29.0343434,
                },
                title:'My School',
                description:'I Love My School'  
            },
            {
                lating:{
                  latitude: 40.9932681,
                  longitude: 29.0543434,
                },
                title:'My Restaruant',
                description:'I Love My Restaruant'  
            }
        ]
    }

    

    render() {
        return (
            <View style={styles.container}>
                <MapView
                style={styles.map}
                region={this.state.region}
                showsUserLocation={true}
                loadingEnabled={true}
                >
                {this.state.markers.map((marker,key)=>{
                 return(
                    <Marker
                        key={key}
                        coordinate={marker.lating}
                        description={marker.description}
                        title={marker.title}
                        // image={require('../assets/marker.png')}
                    >
                        <AnimatedMarker/>
                    </Marker>
                 )
                })}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    },
    image:{
        width:10,
        height:20
    }
})
