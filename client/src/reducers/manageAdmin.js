export default function manageAdmin(state = {isLoggedIn: false, user: {}}, action) {
    switch (action.type) {
        case 'SIGNUP':
            const success = action.payload.status === 'created'
            return { ...state, isLoggedIn: success, user: action.payload.user }

        case 'LOGIN':        
            return { ...state, isLoggedIn: true, user: action.payload.user}

        case 'LOGOUT':
            return { ...state, isLoggedIn: false, user: {}}

        default:
            return state

    }
}