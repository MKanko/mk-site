export default function manageEmails(state = {status: {error: false, message: ''}}, action) {
    switch (action.type) {
        case 'CREATE_EMAIL':
            return {...state, status: action.payload}

        default:
            return state

    }
}