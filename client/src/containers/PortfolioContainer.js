import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid } from 'semantic-ui-react'


class PortfolioContainer extends Component {

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='yellow' textAlign='center'>
                            Portfolio Page
                        </Header>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default connect(null)(PortfolioContainer)