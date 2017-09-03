import { AsyncStorage } from 'react-native'

const KEY_TOKEN = 'token'

async function isLogged() {
    var token = await getToken()
    return !!token
}

async function getToken() {
    return await AsyncStorage.getItem(KEY_TOKEN)
}

async function logout() {
    return await AsyncStorage.removeItem(KEY_TOKEN)
}

export { isLogged, getToken, logout }