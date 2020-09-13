import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

import ResourceIndex from '../components/common/ResourceIndex'
import PostDetail from '../components/post/PostDetail'
import { getBlog } from '../actions'

class BlogContainer extends Component {

    componentDidMount() {
       this.props.getBlog() 
    }

    render() {
        return (
            <Grid divided='vertically' textAlign='center' style={{padding: '25px'}}>
                <Grid.Row columns={1}>
                    <Grid.Column style={{ maxWidth: 1000 }}>
                        <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                            {this.props.title}
                        </Header>
                        <MDEditor.Markdown source={this.props.text_content} style={{color: 'white'}} />                                                                
                    </Grid.Column>
                </Grid.Row>                      
                <ResourceIndex resourceList={this.props.posts} resourceName='post' rowSize={3}>
                    <PostDetail />
                </ResourceIndex>
            </Grid>
        )
    }

}

const mapStateToProps = (state) => {
    const { title, text_content, image, posts } = state.manageBlog.blog 
    return {
        title: title,
        text_content: text_content,
        image: image,
        posts: posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getBlog: () => {dispatch(getBlog())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)