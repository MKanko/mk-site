export default function manageAdminAccess(state = {isLoggedIn: false, user: {}}, action) {
    switch (action.type) {

        case 'SIGNUP':
            const success = action.payload.status === 'created'
            return { ...state, isLoggedIn: success, user: action.payload.user }

        

        default:
            return state

    }
}