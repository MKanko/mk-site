import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Segment } from 'semantic-ui-react'

import { getPortfolio } from '../actions'
import ProjectIndex from '../components/project/ProjectIndex'

class PortfolioContainer extends Component {

    componentDidMount() {
        this.props.getPortfolio()
    }

    render() {
        // console.log('props:', this.props)
        return (
            <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Row columns={1}>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' style={{color: '#0E15FA'}} textAlign='center'>
                            {this.props.title}
                        </Header>
                        <Segment inverted secondary>
                            {this.props.text_content}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>                  
                <Grid.Row columns={3}>
                    <ProjectIndex projects={this.props.projects} />
                </Grid.Row> 
            </Grid>       
        )
    }

}

const mapStateToProps = (state) => {
    // console.log(state)
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
