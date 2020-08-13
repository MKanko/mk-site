export default function manageContact(state = {contact: {}}, action) {
    // console.log('action: ', action)
    switch (action.type) {
        case 'GET_CONTACT':      
            return { ...state, contact: action.payload}
        case 'EDIT_CONTACT':
            return { ...state, contact: action.payload}

        default:
            return state 
    } 
}