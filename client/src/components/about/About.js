import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid } from 'semantic-ui-react'


class About extends Component {

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='blue' textAlign='center'>Welcome to About Mark!</Header>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default connect(null)(About)