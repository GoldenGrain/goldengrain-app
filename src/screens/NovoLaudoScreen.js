import React, { Component } from 'react'
import { FormItem } from '../components'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import { Button, Card, Icon, Header, Tabs, Tab, colors } from 'react-native-elements'
import Camera from 'react-native-camera'
import Image from 'react-native-transformable-image'
import Swiper from 'react-native-swiper'
import { reset } from '../services'

const height = Dimensions.get('window').height

export class NovoLaudoScreen extends Component {

    static navigationOptions = {
        title: 'Novo Laudo',
        headerTintColor: colors.white,
        headerStyle: {
            backgroundColor: colors.secondary2
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            step: 'camera',
            payload: {}
        }
        this.camera = undefined
    }

    takePicture() {
        if (this.camera) {
            this.camera.capture()
              .then((data) => console.log(data))
              .catch(err => console.error(err));
        }
    }

    nextStep(step) {
        this.setState({ step })
    }


    renderButton() {
        return <View style={styles.fabButton}>
            <Icon name={'photo-camera'} color={colors.secondary2} raised reverse
            onPress={() => this.takePicture()} />
            <Icon name={'check'} color={colors.secondary2} raised reverse
            onPress={() => this.nextStep('details')} />
            </View>
    }

    onChangeText(property, name) {
        let { payload } = this.state
        payload[property] = name

        this.setState(payload)
    }

    render() {
        return <View style={styles.container}>
            <Tabs hidesTabTouch tabBarStyle={styles.tabBar} sceneStyle={styles.tabStyle}>
                <Tab selected={this.state.step === 'camera'}>
                    <View style={styles.camera}>
                        <Camera
                            ref={(cam) => {
                                this.camera = cam;
                            }}
                            style={styles.preview}
                            aspect={Camera.constants.Aspect.fill}>
                            {this.renderButton()}
                        </Camera>
                    </View>
                </Tab>

                <Tab selected={this.state.step === 'details'}>
                    <Card>
                        <FormItem title={'Contrato'} onChangeText={(value) => this.onChangeText('contrato', value)}/>
                        <FormItem title={'N de Amostra'} onChangeText={(value) => this.onChangeText('nro_amostra', value)}/>
                        <FormItem title={'Requerente'} onChangeText={(value) => this.onChangeText('requerente', value)}/>
                        <FormItem title={'Produtor'} onChangeText={(value) => this.onChangeText('produtor', value)}/>
                        <FormItem title={'Classificador'} onChangeText={(value) => this.onChangeText('classificador', value)}/>
                        <FormItem title={'Peso da Amostra'} onChangeText={(value) => this.onChangeText('peso_amostra', value)}/>
                        <FormItem title={'Grau de Umidade'} onChangeText={(value) => this.onChangeText('umidade', value)}/>

                        <View style={styles.actions}>
                            <Button onPress={() => this.nextStep('camera')} buttonStyle={styles.actionButton} icon={{ name: 'arrow-back'}} title={'Anterior'}/>
                            <Button onPress={() => this.nextStep('tecnico')} buttonStyle={styles.actionButton} icon={{ name: 'arrow-forward'}} title={'Próximo'}/>
                        </View>
                    </Card>
                </Tab>

                <Tab selected={this.state.step === 'tecnico'}>
                    <Card containerStyle={{ flex: 1 }}>
                        <FormItem title={'Ardidos'} onChangeText={(value) => this.onChangeText('ardidos', value) }/>
                        <FormItem title={'Queimados'} onChangeText={(value) => this.onChangeText('queimados', value) }/>
                        <FormItem title={'Ardidos & Queimados'}  onChangeText={(value) => this.onChangeText('ardidos_queimados', value) }/>
                        <FormItem title={'Mofados'} onChangeText={(value) => this.onChangeText('mofados', value) }/>
                        <FormItem title={'Fermentados'} onChangeText={(value) => this.onChangeText('fermentados', value) }/>
                        <FormItem title={'Imaturos'} onChangeText={(value) => this.onChangeText('imaturos', value) }/>
                        <FormItem title={'Chochos'} onChangeText={(value) => this.onChangeText('chochos', value) }/>

                        <View style={styles.actions}>
                            <Button onPress={() => this.nextStep('details')}  buttonStyle={styles.actionButton} icon={{ name: 'arrow-back'}} title={'Anterior'}/>
                            <Button onPress={() => reset(this.props.navigation, 'Dashboard')}  buttonStyle={styles.actionButton} icon={{ name: 'arrow-forward'}} title={'Finalizar'}/>
                        </View>
                    </Card>
                </Tab>
            </Tabs>
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabBar: {
        height: 0,
        overflow: 'hidden'
    },
    preview: {
         flex: 1
    },
    actions: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionButton: {
        flex: 1
    },
    camera: {
        flex: 1,
        backgroundColor: colors.black
    },
    tabStyle: {
        flex: 1,
        paddingBottom: 0
    },
    fabButton: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        width: (24 * 2 + 4),
        height: (24 * 2 + 4),
        left: 130,
        top: height - 160
    },
})

const laudo = {
    images: [
        'https://i.imgur.com/smrZIqy.jpg',
        'https://i.imgur.com/Cq4uzEU.jpg',
        'https://i.imgur.com/w0qz6HJ.jpg',
        'https://i.imgur.com/rcu1bZi.jpg'
    ]
}