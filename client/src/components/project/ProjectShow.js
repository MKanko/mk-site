import React, { Component } from 'react'
import { connect } from 'react-redux'

import {Grid, Header, Segment, Transition, List} from 'semantic-ui-react'
import { getProject } from '../../actions'

class ProjectShow extends Component {

    componentDidMount() {
        console.log(this.props.location)
        this.props.getProject(this.props.location.pathname.replace('/projects/', ''))
    }

    techDetailList = () => {
        return this.props.technical_details.map(techDetail => <List.Item>{techDetail}</List.Item>)
    } 

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Transition animation={'drop'} duration={2000} transitionOnMount>
                    <Grid.Column style={{ maxWidth: 600 }}>
                        <Header as='h1' color='green' textAlign='center'>
                            {this.props.name}
                        </Header>
                        <Segment inverted secondary>
                            {this.props.description}
                        </Segment>
                        <Segment inverted secondary>
                            <List>
                                {this.techDetailList()}
                            </List>                           
                        </Segment>
                        <Segment inverted secondary>
                            <a href={this.props.project_link}>View Site</a>
                        </Segment>
                    </Grid.Column>
                </Transition>
                </Grid>      
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        name: state.manageProjects.project.name,
        description: state.manageProjects.project.description,
        image: state.manageProjects.project.image,
        technical_details: state.manageProjects.project.technical_details,
        project_link: state.manageProjects.project.project_link 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getProject: (id) => {dispatch(getProject(id))}}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow) 