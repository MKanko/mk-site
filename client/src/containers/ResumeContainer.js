import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid } from 'semantic-ui-react'


class ResumeContainer extends Component {

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='purple' textAlign='center'>Welcome Mark's Totally Bitch'n Resume!</Header>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default connect(null)(ResumeContainer)