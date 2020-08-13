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
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let contact = {
            title: this.state.title,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            link_1: this.state.link_1,
            link_2: this.state.link_2
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.editContact(contact, next)
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Contact Data
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Title'
                                    placeholder='Title'
                                    name='title'
                                    value={this.state.title}
                                    onChange={this.handleOnChange}
                                />
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
                                    label='Phone'
                                    placeholder='Phone'
                                    name='phone'
                                    value={this.state.phone}
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
                                <Form.Input
                                    fluid
                                    label='Link'
                                    placeholder='Link'
                                    name='link_1'
                                    value={this.state.link_1}
                                    onChange={this.handleOnChange} 
                                />
                                <Form.Input
                                    fluid
                                    label='Link'
                                    placeholder='Link'
                                    name='link_2'
                                    value={this.state.link_2}
                                    onChange={this.handleOnChange} 
                                />
                            </Form.Group>                         
                            <Form.Button>Submit Edits</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default EditContact 