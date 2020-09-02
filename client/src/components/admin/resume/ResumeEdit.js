import React, { Component } from 'react'
import { Form, Grid, Header, Button } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

class ResumeEdit extends Component {

    constructor(props) {
        super(props)
        const { title, text_content } = props.location.query.resume 
        this.state = {
            title: title,
            text_content: text_content 
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
            text_content: content         
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
                        </Form>
                        <MDEditor
                            name='text_content'
                            value={text_content}
                            onChange={this.handleEditorChange}
                        /><br></br>
                        <Button onClick={this.handleSubmit}>Submit Update</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }

}

export default ResumeEdit 