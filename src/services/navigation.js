import { NavigationActions } from 'react-navigation'

function navigate({ navigate }, route, params = {}) {
    navigate(route, params)
}

function reset({ dispatch }, routeName, params = {}) {
    const action = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName, params })
        ]
    })
    dispatch(action)
}

export { navigate, reset }