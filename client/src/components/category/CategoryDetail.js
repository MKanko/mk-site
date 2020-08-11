import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

const CategoryDetail = (props) => {

    return (
        <Grid.Column width={8}>
            <Card>
                <Card.Content>
                    <Card.Header>{props.category.title}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}

export default CategoryDetail