import React, { Component } from 'react'
import { Form, Grid, Header } from 'semantic-ui-react'

class EditResume extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text_content: '' 
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
        const { title, text_content } = this.state 
        let resume = {
            title: title, 
            text_content: text_content
        }
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.location.query.editResume(resume, next)
    }

    render() {
        const { title, text_content } = this.state 
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='green' textAlign='center'>
                            Edit Resume Data
                        </Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group widths='equal'>
                                <Form.Input
                                    fluid
                                    label='Title'
                                    placeholder='Title'
                                    name='title'
                                    value={title}
                                    onChange={this.handleOnChange}
                                />
                            </Form.Group>                         
                            <Form.TextArea 
                                label='Content'
                                placeholder='Resume page content...'
                                name='text_content'
                                value={text_content}
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

export default EditResume 