export default function manageAbout(state = {about: {}}, action) {
    console.log('action: ', action)
    switch (action.type) {
        case 'GET_ABOUT':      
            return { ...state, about: action.payload}
        case 'EDIT_ABOUT':
            return { ...state, about: action.payload}

        default:
            return state 
    } 
}