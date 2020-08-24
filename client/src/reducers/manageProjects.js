export default function manageProjects(state = {projects: [], project: {technical_details: []}}, action) {
    // console.log('project action: ', action)
    switch (action.type) {
        case 'GET_PROJECTS':      
            return { ...state, projects: action.payload }
        case 'CREATE_PROJECT':
            return { ...state, projects: [...state.projects, action.payload]}
        case 'EDIT_PROJECT':
            const projectIndex = state.projects.findIndex((project) => project.id === action.payload.id)
            return { ...state, projects: [...state.projects.slice(0, projectIndex), action.payload, ...state.projects.slice(projectIndex + 1)] }
        case 'GET_PROJECT':
            return { ...state, project: action.payload }

        default:
            return state 
    } 
}