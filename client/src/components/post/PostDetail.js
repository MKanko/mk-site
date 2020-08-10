import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PostDetail = (props) => {
    console.log('detail props:', props)

    return (
        <Grid.Column>
            <Card as={Link} to={{pathname: '/posts/' + props.post.title, query: {post: props.post}}} style={{backgroundColor: 'grey' }}>
                <Card.Content>
                    <Card.Header>{props.post.title}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}

export default PostDetail 