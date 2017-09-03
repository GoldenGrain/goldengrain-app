import React from 'react'
import { colors } from 'react-native-elements'
import Spinner from 'react-native-spinkit'

export const Loading = () => {
    return <Spinner type={'Arc'} color={colors.secondary2} size={60} />
}