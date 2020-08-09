export default function manageBlog(state = {blog: {posts: []}}, action) {
    console.log('action: ', action)
    switch (action.type) {
        case 'GET_BLOG':      
            return { ...state, blog: action.payload}
        case 'EDIT_BLOG':
            return { ...state, blog: action.payload}
        case 'EDIT_POST':
            return { ...state, blog: {}}

        default:
            return state 
    } 
}