import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment } from 'semantic-ui-react'

import { getContact } from '../../actions'

class About extends Component {

    componentDidMount() {
        this.props.getContact()
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='purple' textAlign='center'>
                            {this.props.title}
                        </Header>
                        <Segment inverted secondary>
                            {this.props.name}
                            {this.props.phone}
                            {this.props.email}
                            {this.props.link_1}
                            {this.props.link_2}
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state:', state)
    return {
        title: state.manageContact.contact.title,
        name: state.manageContact.contact.name,
        phone: state.manageContact.contact.phone,
        email: state.manageContact.contact.email,
        link_1: state.manageContact.contact.link_1,
        link_2: state.manageContact.contact.link_2 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getContact: () => {dispatch(getContact())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(About)