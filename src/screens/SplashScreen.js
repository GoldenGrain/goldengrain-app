import React, { Component } from 'react'
import { View, Text, InteractionManager, StyleSheet } from 'react-native'
import { isLogged, reset } from '../services'
import { BackgroundView, PulseImage } from '../components'

export class SplashScreen extends Component {

    static navigationOptions = {
        header: false
    }

    async redirectIfAuthenticated() {
        const logged = await isLogged()
        const redirectTo = logged ? 'Dashboard' : 'Login';

        reset(this.props.navigation, redirectTo)
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            setTimeout(() => this.redirectIfAuthenticated(), 1500)
        })
    }

    render() {
        return <BackgroundView source={require('../resources/background-1.jpg')} style={styles.container}>
            <PulseImage source={require('../resources/logo-badge-circle.png')} style={styles.center} />
        </BackgroundView>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150
    }
})