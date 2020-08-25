import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class EditContact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            name: '',
            phone: '',
            email: '',
            link_1: '',
            link_2: ''
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
        const { title, name, phone, email, link_1, link_2 } = this.state
        let contact = {
            title: title,
            name: name,
            phone: phone,
            email: email,
            link_1: link_1,
            link_2: link_2
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.editContact(contact, next)
    }

    render() {
        const { title, name, phone, email, link_1, link_2 } = this.state 
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Contact Data
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            {/* <Form.Group widths='equal'> */}
                                <Form.Input
                                    fluid
                                    label='Title'
                                    placeholder='Title'
                                    name='title'
                                    value={title}
                                    onChange={this.handleOnChange}
                                />
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
                                    label='Phone'
                                    placeholder='Phone'
                                    name='phone'
                                    value={phone}
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
                                <Form.Input
                                    fluid
                                    label='Link'
                                    placeholder='Link'
                                    name='link_1'
                                    value={link_1}
                                    onChange={this.handleOnChange} 
                                />
                                <Form.Input
                                    fluid
                                    label='Link'
                                    placeholder='Link'
                                    name='link_2'
                                    value={link_2}
                                    onChange={this.handleOnChange} 
                                />
                            <Form.Button>Submit Edits</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default EditContact 