import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header, Segment } from 'semantic-ui-react'

import { getPortfolio } from '../actions'

class PortfolioContainer extends Component {

    componentDidMount() {
        this.props.getPortfolio()
    }

    render() {
        return (
            <div>
                <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
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
                    <ProjectIndex />
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.managePortfolio.portfolio.title,
        text_content: state.managePortfolio.portfolio.text_content,
        image: state.managePortfolio.portfolio.image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getPortfolio: () => {dispatch(getPortfolio())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioContainer)