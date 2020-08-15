import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class EditProject extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.location.query.project.name,
            description: props.location.query.project.description,
            technical_details: props.location.query.project.technical_details,
            image: props.location.query.project.image
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleOnTechDetailChange = (index) => (event) => {
        const newDetails = this.state.technical_details.map((techDetail, detailIndex) => {
            if (index !== detailIndex) {
                return techDetail
            } else {
                return event.target.value 
            }
        })
        this.setState({
            technical_details: newDetails
        })
    }

    handleRemoveTechDetail = index => (event) => {
        event.preventDefault()
        this.setState({
            technical_details: this.state.technical_details.filter((techDetail, detailIndex) => index !== detailIndex)})
    }

    handleAddTechDetail = (event) => {
        event.preventDefault()
        this.setState({
            technical_details: this.state.technical_details.concat([''])
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let project = {
            name: this.state.name,
            description: this.state.description,
            technical_details: this.state.technical_details,
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
                                <Form.Input
                                    fluid
                                    label='Name'
                                    placeholder='Name'
                                    name='name'
                                    value={this.state.name}
                                    onChange={this.handleOnChange}
                                />
                                {this.state.technical_details.map((techDetail, index) => (
                                    <Form.Group widths={'equal'}> 
                                        <Form.Input 
                                            fluid
                                            placeholder='Technical Detail'
                                            name='technical_details'
                                            value={techDetail}
                                            onChange={this.handleOnTechDetailChange(index)} 
                                        />
                                        <Form.Button size='mini' onClick={this.handleRemoveTechDetail(index)}>
                                            Remove Detail
                                        </Form.Button>
                                    </Form.Group>
                                ))}
                                <Form.Button size='mini' onClick={this.handleAddTechDetail}>
                                    Add Detail 
                                </Form.Button>
                                <Form.Input
                                    fluid
                                    label='Image'
                                    placeholder='Image'
                                    name='image'
                                    value={this.state.image}
                                    onChange={this.handleOnChange} 
                                />                              
                            <Form.TextArea 
                                label='Description'
                                placeholder='Project page content...'
                                name='description'
                                value={this.state.description}
                                onChange={this.handleOnChange}
                            />
                            <Form.Button size='mini'>Submit Update</Form.Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default EditProject