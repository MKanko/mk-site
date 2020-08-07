export default function manageHome(state = {home: {}}, action) {
    console.log('action: ', action)
    switch (action.type) {
        case 'GET_HOME':      
            return { ...state, home: action.payload}

        default:
            return state 
    } 
}