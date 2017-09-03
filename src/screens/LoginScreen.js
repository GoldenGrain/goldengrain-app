import React, { Component } from 'react'
import { BackgroundView, FormItem } from '../components'
import { Alert, StyleSheet } from 'react-native'
import { Icon, Button } from 'react-native-elements'
import * as Animatable from 'react-native-animatable'
import { reset } from '../services'

export class LoginScreen extends Component {

    static navigationOptions = {
        header: false
    }

    constructor(props) {
        super(props)
        this.state = {
            type: undefined,
            document: '',
            password: '',
        }
    }

    login() {
        const { type, document, password } = this.state;
        reset(this.props.navigation, 'Dashboard', { type })
    }

    changeField(property, value) {
        this.setState({ [property]: value })
    }

    renderForm() {
        return <BackgroundView source={require('../resources/background-1.jpg')} style={styles.container}>
            <Animatable.View animation="bounceInRight" style={styles.form}>
                <FormItem keyboardType={'numbers-and-punctuation'} title={this.state.type === 'Produto' ? 'CPF' : 'CNPJ'}
                onChangeText={(value) => this.changeField('document', value)}/>
                <FormItem title={'Senha'} secureTextEntry={true} onChangeText={(value) => this.changeField('password', value)} />
                <Button title={'Entrar'} onPress={(e) => this.login(e)} secondary2 buttonStyle={styles.actionButton} />
            </Animatable.View>
        </BackgroundView>
    }

    render() {
        if (this.state.type) {
            return this.renderForm()
        }

        return <BackgroundView source={require('../resources/background-1.jpg')} style={styles.container}>
            <Animatable.View animation="bounceInLeft" style={styles.actions}>
                <Button onPress={() => this.setState({ type: 'Produtor' })} icon={{ name: 'location-on' }} title={'Sou Produtor'} secondary2 />
            </Animatable.View>
            <Animatable.View animation="bounceInLeft" delay={100} style={styles.actions}>
                <Button onPress={() => this.setState({ type: 'Classificador' })} icon={{ name: 'gavel' }} title={'Sou Classificador'} primary1 />
            </Animatable.View>
        </BackgroundView>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actions: {
        marginBottom: 15,
        alignSelf: 'stretch'
    },
    actionButton: {
        marginVertical: 15
    },
    form: {
        width: '90%',
        backgroundColor: 'rgba(0,0,0,.4)'
    },
})