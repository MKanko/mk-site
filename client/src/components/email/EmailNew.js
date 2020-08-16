import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class EmailNew extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            subject: '',
            email: '',
            message: ''

        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let email = {
            name: this.state.name,
            subject: this.state.subject,
            email: this.state.email,
            message: this.state.message
        }
        let next = {
            redirect: this.props.location.history.push('/contact')
        }
        this.props.location.query.createEmail(email, next)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='Name'
                        placeholder='Name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <Form.Input
                        fluid
                        label='Subject'
                        placeholder='Subject'
                        name='subject'
                        value={this.state.subject}
                        onChange={this.handleOnChange}
                    />
                    <Form.Input
                        fluid
                        label='Email'
                        placeholder='Email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.TextArea 
                    label='Message'
                    placeholder='Message'
                    name='message'
                    value={this.state.message}
                    onChange={this.handleOnChange}
                />
                <Form.Button>Submit Edits</Form.Button>
            </Form>
        )
    }

}

export default EmailNew 