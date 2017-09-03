import React from 'react'
import { Image, StyleSheet } from 'react-native'
import _ from 'lodash'

export const BackgroundView = ({ children, source, style }) => {
    let defaultStyle = {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }

    const styles = _.extend(defaultStyle, style)
    return <Image source={source} style={styles}>{children}</Image>
}