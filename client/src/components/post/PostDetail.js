import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const PostDetail = (props) => {

    return (
        <Grid.Column width={5}>
            <Card as={Link} to={{pathname: '/posts/' + props.post.id}} style={{backgroundColor: 'grey'}}>
            <Image src={process.env.PUBLIC_URL + props.post.image} />
                <Card.Content>
                    <Card.Header>{props.post.title}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}

export default PostDetail 