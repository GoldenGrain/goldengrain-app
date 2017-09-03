import React, { Component } from 'react'
import { List, ListItem, colors } from 'react-native-elements'
import { Text, Dimensions, ScrollView, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const LaudoTecnicoScreen = ({ laudo }) => {
    return <ScrollView style={styles.container}>
        <List containerStyle={styles.lists}>
            <ListItem title={'Ardidos'}  hideChevron badge={{ element: <Text>0,31g (0.2%)</Text>}} />
            <ListItem title={'Queimados'}  hideChevron badge={{ element: <Text>0,31g (0.2%)</Text>}} />
            <ListItem title={'Ardidos & Queimados'}  hideChevron badge={{ element: <Text>0,62g (0.4%)</Text>}} />
            <ListItem title={'Mofados'}  hideChevron badge={{ element: <Text>0,31g (0.2%)</Text>}} />
            <ListItem title={'Fermentados'}  hideChevron badge={{ element: <Text>0,31g (0.2%)</Text>}} />
            <ListItem title={'Imaturos'}  hideChevron badge={{ element: <Text>0,31g (0.2%)</Text>}} />
            <ListItem title={'Chochos'}  hideChevron badge={{ element: <Text>0,31g (0.2%)</Text>}} />
        </List>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    lists: {
        marginTop: 0
    },

    image: {
        flex: 1,
        width
    }
})