export default function manageHome(state = {home: {display_phrases: []}}, action) {
    switch (action.type) {
        case 'GET_HOME':      
            return { ...state, home: action.payload}
        case 'EDIT_HOME':
            return { ...state, home: action.payload}

        default:
            return state 
    } 
}