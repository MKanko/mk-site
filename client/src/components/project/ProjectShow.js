import React from 'react'
import {Grid, Header, Segment} from 'semantic-ui-react'

const ProjectShow = (props) => {
// console.log('show props:', props)
    return (
        <div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 600 }}>
                        <Header as='h1' color='green' textAlign='center'>
                            {props.location.query.project.name}
                        </Header>
                        <Segment inverted secondary>
                            {props.location.query.project.description}
                        </Segment>
                        <Segment inverted secondary>
                            {props.location.query.project.technical_detail}
                        </Segment>
                    </Grid.Column>
                </Grid>
        </div>
    )

}

export default ProjectShow 