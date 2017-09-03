import React, { Component } from 'react'
import { Loading } from '../components'
import { Icon, Badge, SearchBar, List, ListItem, colors } from 'react-native-elements'
import { Dimensions, InteractionManager, Text, StyleSheet, View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { navigate } from '../services'

const height = Dimensions.get('window').height

export class DashboardScreen extends Component {

    static navigationOptions = {
        title: 'Dashboard',
        headerTintColor: colors.white,
        headerStyle: {
            backgroundColor: colors.secondary2
        },
        headerRight: <Icon name="exit-to-app" color={colors.white} />
    }

    constructor(props) {
        super(props)
        const { type } = this.props.navigation.state.params;
        this.state = {
            loading: true,
            type
        }
    }

    loading() {
        return <View style={styles.container}>
            <Loading />
        </View>
    }
    
    badge(status) {
        return <Badge containerStyle={{ backgroundColor: status.color }}>
            <Text>{status.name}</Text>
        </Badge>
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({ loading: false })
        })
    }

    renderButton() {
        return <View style={styles.fabButton}>
            <Icon name={'add'} color={colors.secondary2} raised reverse
            onPress={() => navigate(this.props.navigation, 'NovoLaudo')} />
            </View>
    }

    render() {
        if (this.state.loading) {
            return this.loading()
        }

        return <View style={styles.container}>
            <SearchBar />
            <List containerStyle={{ marginTop: 0 }}>
            {fakeData.map((l, i) => {
                return <ListItem
                    key={`laudo-${i}`}
                    title={l.name}
                    onPress={() => navigate(this.props.navigation, 'Laudo')}
                    badge={{ element: this.badge(l.status)}}
                    subtitle={`Contrato ${i}${i}${i}`}
                />
            })}
            </List>
            {this.state.type === 'Classificador' ? this.renderButton(): null}
        </View>
    }

}

const fakeData = [
    {
        name: 'Cargill',
        status: {
            name: 'Finalizado',
            color: colors.secondary2
        },
    },
    {
        name: 'Amaggi',
        status: {
            name: 'Pendente',
            color: colors.primary1
        }
    },
    {
        name: 'Bunge',
        status: {
            name: 'Pendente',
            color: colors.primary1
        }
    }
]

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fabButton: {
        ...StyleSheet.absoluteFillObject,
        width: (24 * 2 + 4),
        height: (24 * 2 + 4),
        left: 150,
        top: height - 160
    },
})
