import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getContact } from '../actions'

class ContactContainer extends Component {

    componentDidMount() {
        this.props.getContact()
    }

    render() {
        return (
            <ContactDetail contact={this.props.contact} />
        )
    }

}

const mapStateToProps = (state) => {
    return {contact: state.manageContact.contact}
}

const mapStateToProps = (dispatch) => {
    return {getContact: () => {dispatch(getContact())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)