import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Header } from 'semantic-ui-react'

import { getBlog } from '../actions'
import ResourceIndex from '../components/common/ResourceIndex'
import PostDetail from '../components/post/PostDetail'
// import PostIndex from '../components/post/PostIndex'

class BlogContainer extends Component {

    componentDidMount() {
       this.props.getBlog() 
    }

    // <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>

    render() {
        return (
            <Grid divided='vertically' textAlign='center' style={{padding: '100px'}}>
                <Grid.Row columns={1}>
                    <Grid.Column style={{ maxWidth: 1000 }}>
                        <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                            {this.props.title}
                        </Header>
                        <h4 style={{color: 'white'}}>{this.props.text_content}</h4>                
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
    console.log(state)
    return {
        title: state.manageBlog.blog.title,
        text_content: state.manageBlog.blog.text_content,
        image: state.manageBlog.blog.image,
        posts: state.manageBlog.blog.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getBlog: () => {dispatch(getBlog())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer)