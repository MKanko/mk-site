import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Container, Grid } from 'semantic-ui-react'

import { signup, login, logout, editHome, editAbout, editPortfolio, getProjects, editProject, editBlog, getPosts, editPost, editResume, getCategories, editCategory, editContact } from '../actions'

class AdminHome extends Component {

    componentDidMount() {
        this.props.getProjects()
        this.props.getPosts()
        this.props.getCategories()
    }

    genPostEdit = () => {
        return this.props.posts.map(post => <Button key={post.id}><Link to={{pathname: '/post/edit', query: {post: post.attributes, editPost: this.props.editPost}}}>Edit {post.attributes.title}</Link></Button>)
    }

    genProjEdit = () => {
        return this.props.projects.map(project => <Button key={project.id}><Link to={{pathname: '/project/edit', query: {project: project.attributes, editProject: this.props.editProject}}}>Edit {project.attributes.name}</Link></Button>)
    }

    genCatEdit = () => {
        return this.props.categories.map(category => <Button key={category.id}><Link to={{pathname: '/category/edit', query: {category: category.attributes, editCategory: this.props.editCategory}}}>Edit {category.attributes.title}</Link></Button>)
    }

    handleClick = () => {
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.logout(next)
    }

    render() {
        console.log('adminhome props:', this.props)
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Container textAlign='center'>
                            <Button.Group vertical>
                                <Button>
                                    <Link to={{pathname: '/login', query: {login: this.props.login}}}><p>Log In</p></Link>
                                </Button>                      
                                <Button>
                                    <Link to={{pathname: '/signup', query: {signup: this.props.signup}}}><p>Sign Up</p></Link>
                                </Button>
                                {this.props.manageAdmin.isLoggedIn ? <Button><Link to={{pathname: '/home/edit', query: {editHome: this.props.editHome}}}><p>Edit Home</p></Link></Button> : null}
                                {this.props.manageAdmin.isLoggedIn ? <Button><Link to={{pathname: '/about/edit', query: {editAbout: this.props.editAbout}}}><p>Edit About</p></Link></Button> : null}
                                {this.props.manageAdmin.isLoggedIn ? <Button><Link to={{pathname: '/portfolio/edit', query: {editPortfolio: this.props.editPortfolio}}}><p>Edit Portfolio</p></Link></Button> : null}
                                {this.props.manageAdmin.isLoggedIn ? this.genProjEdit() : null}
                                {this.props.manageAdmin.isLoggedIn ? <Button><Link to={{pathname: '/blog/edit', query: {editBlog: this.props.editBlog}}}><p>Edit Blog</p></Link></Button> : null}
                                {this.props.manageAdmin.isLoggedIn ? this.genPostEdit() : null} 
                                {this.props.manageAdmin.isLoggedIn ? <Button><Link to={{pathname: '/resume/edit', query: {editResume: this.props.editResume}}}><p>Edit Resume</p></Link></Button> : null}
                                {this.props.manageAdmin.isLoggedIn ? this.genCatEdit() : null}
                                {this.props.manageAdmin.isLoggedIn ? <Button><Link to={{pathname: '/contact/edit', query: {editContact: this.props.editContact}}}><p>Edit Contact</p></Link></Button> : null}                    
                                {this.props.manageAdmin.isLoggedIn ? <Button onClick={this.handleClick}><p>Log Out</p></Button> : null}
                            </Button.Group>
                        </Container>
                     </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        manageAdmin: state.manageAdmin,
        projects: state.manageProjects.projects,
        posts: state.managePosts.posts,
        categories: state.manageCategories.categories  
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signup: (user, next) => {dispatch(signup(user, next))},
//         login: (user, next) => {dispatch(login(user, next))},
//         logout: (user) => {dispatch(logout(user))},
//         editHome: (home, next) => {dispatch(editHome(home, next))},
//         editAbout: (about, next) => {dispatch(editAbout(about, next))},
//         editPortfolio: (portfolio, next) => {dispatch(editPortfolio(portfolio, next))},
//         getProjects: () => {dispatch(getProjects())}, 
//         editProject: (project, next) => {dispatch(editProject(project, next))},
//         editBlog: (blog, next) => {dispatch(editBlog(blog, next))},
//         getPosts: () => {dispatch(getPosts())},
//         editPost: (post, next) => {dispatch(editPost(post, next))},
//         editResume: (resume, next) => {dispatch(editResume(resume, next))}
//     }
// }

export default connect(mapStateToProps, { signup, login, logout, editHome, editAbout, editPortfolio, getProjects, editProject, editBlog, getPosts, editPost, editResume, getCategories, editCategory, editContact })(AdminHome)