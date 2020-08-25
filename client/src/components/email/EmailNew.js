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
        const { name, value } = event.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, subject, email, message } = this.state 
        let mail = {
            name: name,
            subject: subject,
            email: email,
            message: message
        }
        let next = {
            redirect: () => this.props.history.push('/contact')
        }
        this.props.createEmail(mail, next)
    }

    render() {
        const { name, subject, email, message } = this.state 
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        label='Name'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={this.handleOnChange}
                    />
                    <Form.Input
                        fluid
                        label='Subject'
                        placeholder='Subject'
                        name='subject'
                        value={subject}
                        onChange={this.handleOnChange}
                    />
                    <Form.Input
                        fluid
                        label='Email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={this.handleOnChange}
                    />
                </Form.Group>
                <Form.TextArea 
                    label='Message'
                    placeholder='Message'
                    name='message'
                    value={message}
                    onChange={this.handleOnChange}
                />
                <Form.Button>Send</Form.Button>
            </Form>
        )
    }

}

export default EmailNew 