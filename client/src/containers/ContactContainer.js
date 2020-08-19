import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getContact, createEmail } from '../actions'
import ContactDetail from '../components/contact/ContactDetail'

class ContactContainer extends Component {

    componentDidMount() {
        this.props.getContact()
    }

    render() {
        return (
            <ContactDetail 
                contact={this.props.contact} 
                createEmail={this.props.createEmail} 
                history={this.props.history} 
                formStatus={this.props.formStatus} 
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.manageContact.contact,
        formStatus: state.manageEmails.status
    }
}

const mapStateToProps = (dispatch) => {
    return {
        getContact: () => {dispatch(getContact())},
        createEmail: (email, next) => {dispatch(createEmail(email, next))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)