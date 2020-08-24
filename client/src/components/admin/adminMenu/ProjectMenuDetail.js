import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ProjectMenuDetail = (props) => {

    return (    
        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
            <Card as={Link} to={{pathname: '/project/edit', query: {project: props.project.attributes, editProject: props.editProject}}}>
                <Image fluid src={process.env.PUBLIC_URL + props.project.attributes.image} size='medium' style={{objectFit: 'cover', height: '15em'}} />
                <Card.Content>
                    <Card.Header>{props.project.attributes.name}</Card.Header>
                </Card.Content>
            </Card>
        </Grid.Column>        
    )
}

export default ProjectMenuDetail