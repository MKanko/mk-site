import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Grid, Header, Segment, Transition, List, Button} from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

import { getProject } from '../../actions'

class ProjectShow extends Component {

    componentDidMount() {
        this.props.getProject(this.props.location.pathname.replace('/projects/', ''))
    }

    techDetailList = () => {
        return this.props.technical_details.map(techDetail => <List.Item>{techDetail}</List.Item>)
    }
    
    viewSite = () => {
        if (this.props.project_link) {
            return (
                <Button><a href={this.props.project_link} target='_blank' rel='noopener noreferrer' style={{color: '#DBCE07'}}>View Site</a></Button>
            )         
        }
    }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Transition animation={'drop'} duration={2000} transitionOnMount>
                    <Grid.Column style={{ maxWidth: 600 }}>
                        <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                            {this.props.name}
                        </Header>
                        <Segment inverted secondary>
                            <MDEditor.Markdown source={this.props.description} style={{textAlign: 'left'}} />
                        </Segment>
                        <Segment inverted secondary>
                            <h5>Technical Details</h5>
                            <List>
                                {this.techDetailList()}
                            </List>                           
                        </Segment>
                        <Segment inverted secondary>
                            <Button.Group basic widths='3' style={{color: 'yellow'}}>
                                <Button as={Link} to={{pathname: '/portfolio'}} style={{color: 'black'}}>Back</Button> 
                                {this.viewSite()}                          
                                <Button><a href={this.props.github_link} target='_blank' rel='noopener noreferrer' style={{color: 'black'}}>Github</a></Button>              
                            </Button.Group>
                        </Segment>
                    </Grid.Column>
                </Transition>
            </Grid>      
        )
    }

}

const mapStateToProps = (state) => {
    const {name, description, image, technical_details, project_link, github_link} = state.manageProjects.project 
    return {
        name: name,
        description: description,
        image: image,
        technical_details: technical_details,
        project_link: project_link,
        github_link: github_link 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getProject: (id) => {dispatch(getProject(id))}}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow) 