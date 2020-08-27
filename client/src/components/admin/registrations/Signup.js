import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            password_confirmation: '',
            admin_secret: '',
            errors: ''
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target 
        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { username, password, password_confirmation, admin_secret } = this.state
        let user = {
            username: username,
            password: password,
            password_confirmation: password_confirmation,
            admin_secret: admin_secret
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }       
        this.props.location.query.signup(user, next)
    }

    render() {
        const { username, password, password_confirmation, admin_secret } = this.state 

        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Signup
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input 
                                    fluid 
                                    icon='user' 
                                    iconPosition='left' 
                                    placeholder='username'
                                    name='username'
                                    value={username}
                                    onChange={this.handleChange} 
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    type='password'
                                    placeholder='Password Confirmation'
                                    name='password_confirmation'
                                    value={password_confirmation}
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    type='admin secret'
                                    placeholder='Admin Secret'
                                    name='admin_secret'
                                    value={admin_secret}
                                    onChange={this.handleChange}
                                />
                                <Button color='grey' fluid size='large'>
                                    Signup
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default Signup 