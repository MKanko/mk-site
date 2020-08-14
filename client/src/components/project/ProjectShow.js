import React from 'react'
import {Grid, Header, Segment, Transition, List} from 'semantic-ui-react'

const ProjectShow = (props) => {
// console.log('show props:', props)

    const techDetailList = props.location.query.project.technical_details.map(techDetail => <List.Item>{techDetail}</List.Item>)

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Transition animation={'drop'} duration={2000} transitionOnMount>
                <Grid.Column style={{ maxWidth: 600 }}>
                    <Header as='h1' color='green' textAlign='center'>
                        {props.location.query.project.name}
                    </Header>
                    <Segment inverted secondary>
                        {props.location.query.project.description}
                    </Segment>
                    <Segment inverted secondary>
                        <List>
                            {techDetailList}
                        </List>                           
                    </Segment>
                </Grid.Column>
            </Transition>
            </Grid>      
    )

}

export default ProjectShow 