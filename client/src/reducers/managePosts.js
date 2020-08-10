export default function managePosts(state = {posts: []}, action) {
    // console.log('action: ', action)
    switch (action.type) {
        case 'GET_POSTS':      
            return { ...state, posts: action.payload}
        case 'EDIT_POST':
            const postIndex = state.posts.findIndex((post) => post.id === action.payload.id)
            return { ...state, posts: [...state.posts.slice(0, postIndex), action.payload, ...state.posts.slice(postIndex + 1)] }

        default:
            return state 
    } 
}