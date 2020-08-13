import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Segment, Transition } from 'semantic-ui-react'

import { getPortfolio } from '../actions'
import ProjectIndex from '../components/project/ProjectIndex'

class PortfolioContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.props.getPortfolio()
        this.setState({
            visible: true 
        })
    }

    render() {
        // console.log('props:', this.props)
        return (
            <div>
                <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Transition animation={'drop'} duration={2000} transitionOnMount>                    
                        <Grid.Row columns={1}>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h1' color='yellow' textAlign='center'>
                                    {this.props.title}
                                </Header>
                                <Segment inverted secondary>
                                    {this.props.text_content}
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>                  
                    </Transition>
                    <Transition animation={'drop'} duration={2000} transitionOnMount>
                        <Grid.Row columns={3}>
                            <ProjectIndex projects={this.props.projects} />
                        </Grid.Row>
                    </Transition>                 
                </Grid>                           
            </div>
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
// export default PortfolioContainer