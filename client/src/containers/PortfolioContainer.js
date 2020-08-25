import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header } from 'semantic-ui-react'

import { getPortfolio } from '../actions'
import ResourceIndex from '../components/common/ResourceIndex'
import ProjectDetail from '../components/project/ProjectDetail'

class PortfolioContainer extends Component {

    componentDidMount() {
        this.props.getPortfolio()
    }

    // <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

    render() {
        return (         
            <Grid divided='vertically' textAlign='center' style={{padding: '200px'}}>
                <Grid.Row columns={1}>
                    <Grid.Column style={{ maxWidth: 1000 }}>
                        <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                            {this.props.title}
                        </Header>
                        <h4 style={{color: 'white'}}>{this.props.text_content}</h4>                      
                    </Grid.Column>
                </Grid.Row>                 
                <ResourceIndex resourceList={this.props.projects} resourceName='project' rowSize={3}>
                    <ProjectDetail />
                </ResourceIndex>
            </Grid>       
        )
    }

}

const mapStateToProps = (state) => {
    return {
        title: state.managePortfolio.portfolio.title,
        text_content: state.managePortfolio.portfolio.text_content,
        image: state.managePortfolio.portfolio.image,
        projects: state.managePortfolio.portfolio.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getPortfolio: () => {dispatch(getPortfolio())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)
