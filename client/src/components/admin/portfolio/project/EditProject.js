import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class EditProject extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.location.query.project.name,
            description: props.location.query.project.description,
            technical_detail: props.location.query.project.technical_detail,
            image: props.location.query.project.image
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let project = {
            name: this.state.name,
            description: this.state.description,
            technical_detail: this.state.technical_detail,
            image: this.state.image,
            id: this.props.location.query.project.id 
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.editProject(project, next)
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Project Data
                        </Header>
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
                                    label='Technical Detail'
                                    placeholder='Technical Detail'
                                    name='technical_detail'
                                    value={this.state.technical_detail}
                                    onChange={this.handleOnChange} 
                                />
                                <Form.Input
                                    fluid
                                    label='Image'
                                    placeholder='Image'
                                    name='image'
                                    value={this.state.image}
                                    onChange={this.handleOnChange} 
                                />
                            </Form.Group>                         
                            <Form.TextArea 
                                label='Description'
                                placeholder='Project page content...'
                                name='description'
                                value={this.state.description}
                                onChange={this.handleOnChange}
                            />
                            <Form.Button>Submit Update</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default EditProject