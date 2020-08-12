export default function manageCategories(state = {categories: []}, action) {
    // console.log('action: ', action)
    switch (action.type) {
        case 'GET_CATEGORIES':      
            return { ...state, categories: action.payload}
        case 'EDIT_CATEGORY':
            const categoryIndex = state.categories.findIndex((category) => category.id === action.payload.id)
            return { ...state, categories: [...state.categories.slice(0, categoryIndex), action.payload, ...state.categories.slice(categoryIndex + 1)] }

        default:
            return state 
    } 
}