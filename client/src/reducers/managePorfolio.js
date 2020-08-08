export default function managePorfolio(state = {portfolio: {}}, action) {
    console.log('action: ', action)
    switch (action.type) {
        case 'GET_PORTFOLIO':      
            return { ...state, portfolio: action.payload}
        case 'EDIT_PORTFOLIO':
            return { ...state, portfolio: action.payload}

        default:
            return state 
    } 
}