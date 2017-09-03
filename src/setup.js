import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { SplashScreen, LoginScreen } from './screens'

const GoldenGrainApp = StackNavigator({
    Splash: { screen: SplashScreen },
    Login: { screen: LoginScreen }
}, {
    initialRouteName: 'Splash'
})

export { GoldenGrainApp }