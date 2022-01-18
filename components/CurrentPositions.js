import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import Permissions from 'react-native-permissions'

export default class CurrentPositions extends Component {

    state = {
        region: {
            latitude: 40.9882681,
            longitude: 29.0343434,
            latitudeDelta: 0.095,
            longitudeDelta: 0.045,
        }
    }

    async componentDidMount() {
        const permissions = await Permissions.request('android.permission.ACCESS_FINE_LOCATION');
        console.log(permissions);
        if (permissions !== 'granted') {
            alert("Lütfen konum izinlerini verin !")
            return false
        }
        const { coords } = await this.getCurrentPosition();
        console.log(coords);
        this.setState({
            region: {
                ...this.state.region,
                latitude: coords.latitude,
                longitude: coords.longitude
            }
        })
    }

    getCurrentPosition() {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                position => {
                    resolve(position)
                }),
                reject,
            {
                enableHighAccuracy: true,
                timeOut: 10000,
                maximumAge: 3000
            }
        });
    }





    render() {
        return (
            <View style={styles.container}>
                <MapView
                    region={this.state.region}
                    showsUserLocation={true}
                    loadingEnabled={true}
                    style={styles.map}
                >
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
    }
})