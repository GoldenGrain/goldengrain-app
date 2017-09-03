import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import {
    SplashScreen, LoginScreen, DashboardScreen,
    LaudoScreen, NovoLaudoScreen
} from './screens'

const GoldenGrainApp = StackNavigator({
    Splash: { screen: SplashScreen },
    Login: { screen: LoginScreen },
    Dashboard: { screen: DashboardScreen },
    Laudo: { screen: LaudoScreen },
    NovoLaudo: { screen: NovoLaudoScreen }
}, {
    initialRouteName: 'Splash'
})

export { GoldenGrainApp }