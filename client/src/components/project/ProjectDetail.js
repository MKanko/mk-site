import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './Project.css' 

const ProjectDetail = (props) => {
    return (
        <>    
            <Grid.Column id="desktop" width={5}>
                <Card as={Link} to={{pathname: '/projects/' + props.project.id}} style={{backgroundColor: 'grey' }}>
                    <Image src={process.env.PUBLIC_URL + props.project.image} size='medium' style={{objectFit: 'cover', height: '12em'}} />
                    <Card.Content>
                        <Card.Header>{props.project.name}</Card.Header>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column id="mobile" mobile={10}>
                <Card as={Link} to={{pathname: '/projects/' + props.project.id}} style={{backgroundColor: 'grey' }}>
                    <Image src={process.env.PUBLIC_URL + props.project.image} size='medium' style={{objectFit: 'cover', height: '8em'}} />
                    <Card.Content>
                        <Card.Header>{props.project.name}</Card.Header>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </> 
             
    )
}

export default ProjectDetail


