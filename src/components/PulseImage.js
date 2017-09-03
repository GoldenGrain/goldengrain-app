import React, { Component } from 'react'
import { Image } from 'react-native'
import * as Animatable from 'react-native-animatable'

export const PulseImage = ({ source, style }) => {
    return <Animatable.View animation="pulse" iterationCount="infinite" style={style}>
        <Image source={source} />
    </Animatable.View>
}