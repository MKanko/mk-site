import React from 'react'
import { Grid, Card, Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PostMenuDetail = (props) => {

    return (
        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
            <Card as={Link} to={{pathname: '/post/edit', query: {post: props.post.attributes, editPost: props.editPost}}}>
            <Container>
                <Image fluid src={process.env.PUBLIC_URL + props.post.attributes.image} size='medium' style={{objectFit: 'cover', height: '15em'}} />
            </Container>
                <Card.Content>
                    <Card.Header>{props.post.attributes.title}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default PostMenuDetail