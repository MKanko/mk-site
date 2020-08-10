import React from 'react'
import { Grid } from 'semantic-ui-react'

import PostDetail from './PostDetail'

const PostIndex = (props) => {

    const genPosts = props.posts.map(post => <PostDetail key={post.id} post={post} />)

    return (
        <Grid.Row columns={3}>
           {genPosts}
        </Grid.Row>
    )

}

export default PostIndex 