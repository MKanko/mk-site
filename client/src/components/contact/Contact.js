import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment } from 'semantic-ui-react'

import { getContact } from '../../actions'

class Contact extends Component {

    componentDidMount() {
        this.props.getContact()
    }

    render() {
        return (
            <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='green' textAlign='center'>
                        {this.props.title}
                    </Header>
                    <Segment inverted secondary>
                        <p>{this.props.name}</p>
                        <p>{this.props.phone}</p>
                        <p>{this.props.email}</p>
                        <p><a href='https://www.linkedin.com/in/mark-kanko-a750b3177/'>{this.props.link_1}</a></p>
                        <p><a href='https://github.com/MKanko'>{this.props.link_2}</a></p>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('contactstate:', state)
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact)