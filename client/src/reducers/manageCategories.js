export default function manageCategories(state = {categories: [], category: {}}, action) {
    switch (action.type) {
        case 'GET_CATEGORIES':      
            return { ...state, categories: action.payload}
        case 'CREATE_CATEGORY':
            return { ...state, categories: [...state.categories, action.payload]}
        case 'EDIT_CATEGORY':
            const categoryIndex = state.categories.findIndex((category) => category.id === action.payload.id)
            return { ...state, categories: [...state.categories.slice(0, categoryIndex), action.payload, ...state.categories.slice(categoryIndex + 1)] }
        case 'GET_CATEGORY':
            return { ...state, category: action.payload}

        default:
            return state 
    } 
}