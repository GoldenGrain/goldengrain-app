import { AsyncStorage } from 'react-native'

const KEY_TOKEN = 'token'

async function isLogged() {
    var token = await getToken()
    return !!token
}

async function getToken() {
    return await AsyncStorage.getItem(KEY_TOKEN)
}

export { isLogged, getToken }