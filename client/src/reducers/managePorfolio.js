export default function managePorfolio(state = {portfolio: {}}, action) {
    console.log('action: ', action)
    switch (action.type) {
        case 'GET_PORTFOLIO':      
            return { ...state, home: action.payload}
        case 'EDIT_PORTFOLIO':
            return { ...state, home: action.payload}

        default:
            return state 
    } 
}