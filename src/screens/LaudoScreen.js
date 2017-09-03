import React, { Component } from 'react'
import { LaudoTecnicoScreen, LaudoDetailsScreen } from './'
import { Dimensions, View, StyleSheet } from 'react-native' 
import { Icon, Tabs, Tab, colors } from 'react-native-elements'
import Image from 'react-native-transformable-image'
import Swiper from 'react-native-swiper'

const width = Dimensions.get('window').width

export class LaudoScreen extends Component {

    static navigationOptions = {
        title: 'Laudo 001',
        headerTintColor: colors.white,
        headerStyle: {
            backgroundColor: colors.secondary2
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            selected: 'info'
        }
    }

    changeTab(tab) {
        this.setState({ selected: tab })
    }

    render() {
        const { selected } = this.state;
        return <View style={styles.container}>
            <Swiper>
                {laudo.images.map((image, i) => {
                    return <Image key={`image-${i}`} resizeMode={'contain'} style={styles.image} source={{ uri: image }} />
                })}
            </Swiper>
            <Tabs>
                <Tab
                selectedTitleStyle={{ fontWeight: 'bold', color: colors.secondary2 }}
                onPress={() => this.changeTab('info')} title={'Informações'}
                selected={selected === 'info'}>
                    <LaudoDetailsScreen laudo={laudo} />
                </Tab>
                <Tab
                selectedTitleStyle={{ fontWeight: 'bold', color: colors.secondary2 }}
                onPress={() => this.changeTab('tecnico')} title={'Técnico'}
                selected={selected === 'tecnico'}>
                    <LaudoTecnicoScreen laudo={laudo} />
                </Tab>
            </Tabs>
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        width
    }
})

const laudo = {
    images: [
        'https://i.imgur.com/smrZIqy.jpg',
        'https://i.imgur.com/Cq4uzEU.jpg',
        'https://i.imgur.com/w0qz6HJ.jpg',
        'https://i.imgur.com/rcu1bZi.jpg'
    ]
}