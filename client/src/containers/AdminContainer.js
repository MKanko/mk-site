import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Grid, Container, Card } from 'semantic-ui-react'

import ResourceIndex from '../components/common/ResourceIndex'
import ProjectMenuDetail from '../components/admin/adminMenu/ProjectMenuDetail'
import PostMenuDetail from '../components/admin/adminMenu/PostMenuDetail'
import CategoryMenuDetail from '../components/admin/adminMenu/CategoryMenuDetail'
import SkillMenuDetail from '../components/admin/adminMenu/SkillMenuDetail'
import { signup, login, logout, editHome, editAbout, editPortfolio, getProjects, editProject, editBlog, getPosts, editPost, editResume, getCategories, editCategory, editContact, getSkills, editSkill } from '../actions'


class AdminContainer extends Component {

    componentDidMount() {
        this.props.getProjects()
        this.props.getPosts()
        this.props.getCategories()
        this.props.getSkills()
    }

    renderAdminAccess = () => {
        return (
            <Container textAlign='center'>
                <Button>
                    <Link to={{pathname: '/login', query: {login: this.props.login}}}><p>Log In</p></Link>
                </Button>                      
                <Button>
                    <Link to={{pathname: '/signup', query: {signup: this.props.signup}}}><p>Sign Up</p></Link>
                </Button>
            </Container>
        )
    }

    handleClick = () => {
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.logout(next)
    }

    render() {

        if (!this.props.manageAdmin.isLoggedIn) {
            return this.renderAdminAccess()
        }

        return (
            <div>
                <Grid divided='vertically' textAlign='center' style={{padding: '20px'}}>
                    <Container textAlign='center'>
                        <Button size='mini' onClick={this.handleClick}><p>Log Out</p></Button>
                    </Container>
                    <Grid.Row columns={3} style={{padding: 0}}> 
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/home/edit', query: {editHome: this.props.editHome}}}>
                                    <Card.Content>
                                        <Card.Header>Edit Home</Card.Header>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/about/edit', query: {editAbout: this.props.editAbout}}}>
                                    <Card.Content>
                                        <Card.Header>Edit About</Card.Header>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/portfolio/edit', query: {editPortfolio: this.props.editPortfolio}}}>
                                    <Card.Content>
                                        <Card.Header>Edit Portfolio</Card.Header>
                                    </Card.Content>
                                </Card> 
                            </Grid.Column>                                                           
                    </Grid.Row>
                    <Grid.Row columns={3} style={{padding: 0}}> 
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/blog/edit', query: {editBlog: this.props.editBlog}}}>
                                    <Card.Content>
                                        <Card.Header>Edit Blog</Card.Header>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/resume/edit', query: {editResume: this.props.editResume}}}>
                                    <Card.Content>
                                        <Card.Header>Edit Resume</Card.Header>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/contact/edit', query: {editContact: this.props.editContact}}}>
                                    <Card.Content>
                                        <Card.Header>Edit Contact</Card.Header>
                                    </Card.Content>
                                </Card> 
                            </Grid.Column>                                                           
                    </Grid.Row>
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '50px'}}>
                    <ResourceIndex resourceList={this.props.projects} resourceName='project' rowSize={3}>
                        <ProjectMenuDetail editProject={this.props.editProject} />
                    </ResourceIndex>
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '50px'}}>
                    <ResourceIndex resourceList={this.props.posts} resourceName='post' rowSize={3}>
                        <PostMenuDetail editPost={this.props.editPost} />
                    </ResourceIndex>
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '50px'}}>
                    <ResourceIndex resourceList={this.props.categories} resourceName='category' rowSize={3}>
                        <CategoryMenuDetail editCategory={this.props.editCategory} />
                    </ResourceIndex>
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '50px'}}>
                    <ResourceIndex resourceList={this.props.skills} resourceName='skill' rowSize={3}>
                        <SkillMenuDetail editSkill={this.props.editSkill} />
                    </ResourceIndex>
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
        categories: state.manageCategories.categories,
        skills: state.manageSkills.skills   
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user, next) => {dispatch(signup(user, next))},
        login: (user, next) => {dispatch(login(user, next))},
        logout: (user) => {dispatch(logout(user))},
        editHome: (home, next) => {dispatch(editHome(home, next))},
        editAbout: (about, next) => {dispatch(editAbout(about, next))},
        editPortfolio: (portfolio, next) => {dispatch(editPortfolio(portfolio, next))},
        getProjects: () => {dispatch(getProjects())}, 
        editProject: (project, next) => {dispatch(editProject(project, next))},
        editBlog: (blog, next) => {dispatch(editBlog(blog, next))},
        getPosts: () => {dispatch(getPosts())},
        editPost: (post, next) => {dispatch(editPost(post, next))},
        editResume: (resume, next) => {dispatch(editResume(resume, next))},
        getCategories: () => {dispatch(getCategories())},
        editCategory: (category, next) => {dispatch(editCategory(category, next))},
        editContact: (contact, next) => {dispatch(editContact(contact, next))},
        getSkills: () => {dispatch(getSkills())},
        editSkill: (skill, next) => {dispatch(editSkill(skill, next))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)