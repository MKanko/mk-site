export default function manageBlog(state = {blog: {posts: []}}, action) {
    switch (action.type) {
        case 'GET_BLOG':      
            return { ...state, blog: action.payload}
        case 'EDIT_BLOG':
            return { ...state, blog: action.payload}

        default:
            return state 
    } 
}