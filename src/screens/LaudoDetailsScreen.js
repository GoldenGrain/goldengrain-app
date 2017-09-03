import React, { Component } from 'react'
import { List, ListItem, colors } from 'react-native-elements'
import { Text, ScrollView, StyleSheet } from 'react-native'

export const LaudoDetailsScreen = ({ laudo }) => {
    return <ScrollView style={styles.container}>
        <List containerStyle={styles.lists}>
            <ListItem title={'Contrato'}  hideChevron badge={{ element: <Text>32133</Text>}} />
            <ListItem title={'N de Amostra'}  hideChevron badge={{ element: <Text>2</Text>}} />
            <ListItem title={'Requerente'}  hideChevron badge={{ element: <Text>Cargill</Text>}} />
            <ListItem title={'Produtor'}  hideChevron badge={{ element: <Text>Grupo Mistura</Text>}} />
            <ListItem title={'Classificador'}  hideChevron badge={{ element: <Text>João Antonio Silva</Text>}} />
            <ListItem title={'Peso da Amostra'}  hideChevron badge={{ element: <Text>127,40g</Text>}} />
            <ListItem title={'Grau de Umidade'}  hideChevron badge={{ element: <Text>45%</Text>}} />
        </List>
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    lists: {
        marginTop: 0
    }
})