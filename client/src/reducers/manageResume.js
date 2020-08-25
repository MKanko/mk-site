export default function manageResume(state = {resume: {categories: []}}, action) {
    switch (action.type) {
        case 'GET_RESUME':      
            return { ...state, resume: action.payload}
        case 'EDIT_RESUME':
            return { ...state, resume: action.payload}

        default:
            return state 
    } 
}