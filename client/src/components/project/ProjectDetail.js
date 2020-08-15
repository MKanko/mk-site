import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProjectDetail = (props) => {
    // console.log('detail props:', props)

    return (
        <Grid.Column>
            <Card as={Link} to={{pathname: '/projects/' + props.project.name, query: {project: props.project}}} style={{backgroundColor: 'grey' }}>
                <Image src={process.env.PUBLIC_URL + props.project.image} />
                <Card.Content>
                    <Card.Header>{props.project.name}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>
    )

}

export default ProjectDetail


