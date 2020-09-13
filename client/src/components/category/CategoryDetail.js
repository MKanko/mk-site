import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, Image } from 'semantic-ui-react'

const CategoryDetail = (props) => {

    return (
        <Grid.Column width={5}>
            <Card centered as={Link} to={{pathname: '/categories/' + props.category.id}} style={{backgroundColor: 'grey'}}>
                <Image src={process.env.PUBLIC_URL + props.category.image} size='medium' style={{objectFit: 'cover', height: '12em'}} />
                <Card.Content>
                    <Card.Header>{props.category.title}</Card.Header>
                    {/* <Card.Description>{props.category.text_content}</Card.Description> */}
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default CategoryDetail

