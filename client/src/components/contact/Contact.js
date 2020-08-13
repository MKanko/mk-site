import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment, Transition } from 'semantic-ui-react'

import { getContact } from '../../actions'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false 
        }
    }

    componentDidMount() {
        this.props.getContact()
        this.setState({
            visible: true 
        })
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Transition animation={'drop'} duration={2000} visible={this.state.visible}>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='purple' textAlign='center'>
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
                </Transition>
                </Grid>
            </div>
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