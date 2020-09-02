import React, { Component } from 'react'
import { Form, Grid, Header, Button } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

class ProjectEdit extends Component {

    constructor(props) {
        super(props)
        const { name, description, technical_details, image, project_link, github_link} = props.location.query.project 
        this.state = {
            name: name,
            description: description,
            technical_details: technical_details,
            image: image,
            project_link: project_link,
            github_link: github_link
        }
    }

    handleOnChange = (event) => {
        const { name, value } = event.target 
        this.setState({
            [name]: value 
        })
    }

    handleEditorChange = (content) => {
        this.setState({
            description: content 
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
        const { name, description, technical_details, image, project_link, github_link } = this.state 
        let project = {
            name: name,
            description: description,
            technical_details: technical_details,
            image: image,
            project_link: project_link,
            github_link: github_link,
            id: this.props.location.query.project.id 
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.editProject(project, next)
    }

    render() {
        const { name, description, image, project_link, github_link } = this.state
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
                                value={name}
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
                                value={image}
                                onChange={this.handleOnChange} 
                            /> 
                            <Form.Input
                                fluid
                                label='Project Link'
                                placeholder='Project Link'
                                name='project_link'
                                value={project_link}
                                onChange={this.handleOnChange} 
                            />
                            <Form.Input
                                fluid
                                label='Github Link'
                                placeholder='Github Link'
                                name='github_link'
                                value={github_link}
                                onChange={this.handleOnChange} 
                            />                             
                        </Form><br></br>
                        <MDEditor
                            name='description'
                            value={description}
                            onChange={this.handleEditorChange}
                        /><br></br>
                        <Button onClick={this.handleSubmit}>Submit Update</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default ProjectEdit