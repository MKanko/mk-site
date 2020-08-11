import React from 'react'
import { Grid, Card } from 'semantic-ui-react'

const CategoryDetail = (props) => {
    console.log('detail props:', props)

    return (
        <Grid.Column width={8}>
            <Card centered style={{backgroundColor: 'grey' }}>
                <Card.Content>
                    <Card.Header>{props.cat.title}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}

export default CategoryDetail