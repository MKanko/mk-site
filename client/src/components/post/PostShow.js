import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Header, Segment, Transition, Button } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

import { getPost } from '../../actions'

class PostShow extends Component {

    componentDidMount() {
        this.props.getPost(this.props.location.pathname.replace('/posts/', ''))
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Transition animation={'drop'} duration={2000} transitionOnMount>
                        <Grid.Column style={{ maxWidth: 1000 }}>
                            <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                                {this.props.title}
                            </Header>
                            <Segment inverted secondary>
                                <MDEditor.Markdown source={this.props.text_content} />
                            </Segment>
                            <Button inverted as={Link} to={{pathname: '/blog'}} size='mini' style={{color: '#DBCE07'}}>Back</Button>
                        </Grid.Column>
                    </Transition>
                </Grid>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    const { title, text_content, image } = state.managePosts.post 
    return {
        title: title,
        text_content: text_content,
        image: image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getPost: (id) => {dispatch(getPost(id))}}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)

