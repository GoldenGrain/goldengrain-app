import React from 'react'
import { Image, StyleSheet } from 'react-native'
import _ from 'lodash'

export const BackgroundView = ({ children, source, style }) => {
    const defaultStyles = {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
    return <Image source={source} style={[defaultStyles, style]}>{children}</Image>
}