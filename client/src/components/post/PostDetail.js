import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PostDetail = (props) => {

    return (
        <Grid.Column width={4}>
            <Card as={Link} to={{pathname: '/posts/' + props.post.id}} style={{backgroundColor: 'grey'}}>
            <Image fluid src={process.env.PUBLIC_URL + props.post.image} size='medium' style={{objectFit: 'cover', height: '8em'}} />
                <Card.Content>
                    <Card.Header>{props.post.title}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default PostDetail 