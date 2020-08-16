export default function manageSkills(state = {skills: []}, action) {
    // console.log('action: ', action)
    switch (action.type) {
        case 'GET_SKILLS':      
            return { ...state, skills: action.payload}
        case 'EDIT_SKILL':
            const skillIndex = state.skills.findIndex((skill) => skill.id === action.payload.id)
            return { ...state, skills: [...state.skills.slice(0, skillIndex), action.payload, ...state.skills.slice(skillIndex + 1)] }

        default:
            return state 
    } 
}