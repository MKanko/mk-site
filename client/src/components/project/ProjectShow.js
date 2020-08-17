import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getProject } from '../../actions'

import {Grid, Header, Segment, Transition, List} from 'semantic-ui-react'

class ProjectShow extends Component {

    componentDidMount() {
        getProject(this.props.location.pathName.replace('/projects/', ''))
    }

    techDetailList = () => {
        return this.props.project.technical_details.map(techDetail => <List.Item>{techDetail}</List.Item>)
    } 

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Transition animation={'drop'} duration={2000} transitionOnMount>
                    <Grid.Column style={{ maxWidth: 600 }}>
                        <Header as='h1' color='green' textAlign='center'>
                            {this.props.project.name}
                        </Header>
                        <Segment inverted secondary>
                            {this.props.project.description}
                        </Segment>
                        <Segment inverted secondary>
                            <List>
                                {this.techDetailList()}
                            </List>                           
                        </Segment>
                        <Segment inverted secondary>
                            <a href={this.props.project.project_link}>View Site</a>
                        </Segment>
                    </Grid.Column>
                </Transition>
                </Grid>      
        )
    }

}

const mapStateToProps = (state) => {
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