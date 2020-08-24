import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, Image } from 'semantic-ui-react'

const CategoryMenuDetail = (props) => {

    return (
        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
            <Card centered as={Link} to={{pathname: '/category/edit', query: {category: props.category.attributes, editCategory: props.editCategory}}}>
                <Image fluid src={process.env.PUBLIC_URL + props.category.attributes.image} size='medium' style={{objectFit: 'cover', height: '15em'}} />
                <Card.Content>
                    <Card.Header>{props.category.attributes.title}</Card.Header>
                    {/* <Card.Description>{props.category.attributes.title}</Card.Description> */}
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default CategoryMenuDetail