import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'

const CategoryDetail = (props) => {
    console.log('detail props:', props)

    return (
        <Grid.Column width={8}>
            <Card centered style={{backgroundColor: 'grey' }}>
                <Image src={process.env.PUBLIC_URL + props.category.image} />
                <Card.Content>
                    <Card.Header>{props.category.title}</Card.Header>
                    <Card.Description>{props.category.text_content}</Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default CategoryDetail