import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

import ResourceIndex from '../components/common/ResourceIndex'
import ProjectDetail from '../components/project/ProjectDetail'
import { getPortfolio } from '../actions'

class PortfolioContainer extends Component {

    componentDidMount() {
        this.props.getPortfolio()
    }

    // <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

    render() {
        return (         
            <Grid divided='vertically' textAlign='center' style={{padding: '25px'}}>
                <Grid.Row columns={1}>
                    <Grid.Column style={{ maxWidth: 1000 }}>
                        <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                            {this.props.title}
                        </Header>
                        <MDEditor.Markdown source={this.props.text_content} style={{color: 'white'}} />                                                
                    </Grid.Column>
                </Grid.Row>                 
                <ResourceIndex resourceList={this.props.projects} resourceName='project' rowSize={2}>
                    <ProjectDetail />
                </ResourceIndex>
            </Grid>       
        )
    }

}

const mapStateToProps = (state) => {
    const { title, text_content, image, projects } = state.managePortfolio.portfolio
    return {
        title: title,
        text_content: text_content,
        image: image,
        projects: projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getPortfolio: () => {dispatch(getPortfolio())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)
