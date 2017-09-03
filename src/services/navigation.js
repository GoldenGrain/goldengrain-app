import { NavigationActions } from 'react-navigation'

function navigate({ navigate }, route) {
    navigate(route)
}

function reset({ dispatch }, routeName) {
    const action = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName })
        ]
    })
    dispatch(action)
}

export { navigate, reset }