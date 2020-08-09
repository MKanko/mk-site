export default function manageProjects(state = {projects: []}, action) {
    console.log('action: ', action)
    switch (action.type) {
        case 'GET_PROJECTS':      
            return { ...state, projects: action.payload}

        default:
            return state 
    } 
}