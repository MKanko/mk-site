import React, { Component } from 'react'

class EditResume extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.location.query.post.title,
            text_content: props.location.query.post.text_content 
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let resume = {
            title: this.state.title, 
            text_content: this.state.text_content
        }
        let next = {
            redirect: this.props.history.push('/admin/home')
        }
        this.props.location.query.editResume(resume, next)
    }

    render() {
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
                                    value={this.state.title}
                                    onChange={this.handleOnChange}
                                />
                            </Form.Group>                         
                            <Form.TextArea 
                                label='Content'
                                placeholder='Resume page content...'
                                name='text_content'
                                value={this.state.text_content}
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