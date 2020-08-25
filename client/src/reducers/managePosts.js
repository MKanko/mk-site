export default function managePosts(state = {posts: [], post: {}}, action) {
    switch (action.type) {
        case 'GET_POSTS':      
            return { ...state, posts: action.payload}
        case 'CREATE_POST':
            return { ...state, posts: [...state.posts, action.payload]}
        case 'EDIT_POST':
            const postIndex = state.posts.findIndex((post) => post.id === action.payload.id)
            return { ...state, posts: [...state.posts.slice(0, postIndex), action.payload, ...state.posts.slice(postIndex + 1)] }
        case 'GET_POST':
            return { ...state, post: action.payload }

        default:
            return state 
    } 
}