import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

export const FormItem = ({ title, onChangeText }) => {
    return <View>
        <FormLabel labelStyle={styles.label}>{title}</FormLabel>
        <FormInput autoCorrect={false} onChangeText={onChangeText} />
    </View>
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: 'transparent'
    }
})