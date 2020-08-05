export default function manageHome(state = {home: {}}, action) {
    switch (action.type) {
        case 'GET_HOME':
            return { ...state, home: action.payload.home}

        default:
            return state 
    } 
}