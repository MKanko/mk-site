export default function managePorfolio(state = {portfolio: {projects: []}}, action) {
    console.log('action: ', action)
    switch (action.type) {
        case 'GET_PORTFOLIO':      
            return { ...state, portfolio: action.payload}
        case 'EDIT_PORTFOLIO':
            return { ...state, portfolio: action.payload}
        case 'EDIT_PROJECT':
            return { ...state, portfolio: {}}

        default:
            return state 
    } 
}