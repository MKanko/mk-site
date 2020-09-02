import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Grid, Container, Card } from 'semantic-ui-react'

import ResourceIndex from '../components/common/ResourceIndex'
import ProjectMenuDetail from '../components/admin/adminMenu/ProjectMenuDetail'
import PostMenuDetail from '../components/admin/adminMenu/PostMenuDetail'
import CategoryMenuDetail from '../components/admin/adminMenu/CategoryMenuDetail'
import SkillMenuDetail from '../components/admin/adminMenu/SkillMenuDetail'
import { signup, login, logout, getHome, editHome, getAbout, editAbout, getPortfolio, editPortfolio, getProjects, createProject, editProject, getBlog, editBlog, getPosts, createPost, editPost, getResume, editResume, getCategories, createCategory, editCategory, editContact, getSkills, createSkill, editSkill } from '../actions'


class AdminContainer extends Component {

    componentDidMount() {
        this.props.getProjects()
        this.props.getPosts()
        this.props.getCategories()
        this.props.getSkills()
        this.props.getHome()
        this.props.getAbout()
        this.props.getPortfolio()
        this.props.getBlog()
        this.props.getResume()
    }

    renderAdminAccess = () => {
        return (
            <Container textAlign='center'>
                <Button inverted  color='green'>
                    <Link to={{pathname: '/login', query: {login: this.props.login}}} style={{color: 'green'}}><p>Log In</p></Link>
                </Button>                      
                <Button inverted  color='green'>
                    <Link to={{pathname: '/signup', query: {signup: this.props.signup}}} style={{color: 'green'}}><p>Sign Up</p></Link>
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
                <Grid divided='vertically' textAlign='center' style={{padding: '10px'}}>
                    <Container textAlign='center'>
                        <Button inverted  color='green' size='mini' onClick={this.handleClick}><p>Log Out</p></Button>
                    </Container>
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '10px'}}>
                    <Grid.Row columns={3} style={{padding: 0}}> 
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card inverted as={Link} to={{pathname: '/home/edit', query: {editHome: this.props.editHome, home: this.props.home}}} style={{backgroundColor: 'grey'}}>
                                    <Card.Content>
                                        <Card.Header>Edit Home</Card.Header>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/about/edit', query: {editAbout: this.props.editAbout, about: this.props.about}}} style={{backgroundColor: 'grey'}}>
                                    <Card.Content>
                                        <Card.Header>Edit About</Card.Header>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                                <Card as={Link} to={{pathname: '/contact/edit', query: {editContact: this.props.editContact}}} style={{backgroundColor: 'grey'}}>
                                    <Card.Content>
                                        <Card.Header>Edit Contact</Card.Header>
                                    </Card.Content>
                                </Card> 
                            </Grid.Column>                                                                                       
                    </Grid.Row>
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '10px'}}>
                    <Grid.Row columns={2} style={{padding: 0}}>
                        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                            <Card as={Link} to={{pathname: '/portfolio/edit', query: {editPortfolio: this.props.editPortfolio, portfolio: this.props.portfolio}}} style={{backgroundColor: 'grey'}}>
                                <Card.Content>
                                    <Card.Header>Edit Portfolio</Card.Header>
                                </Card.Content>
                            </Card> 
                        </Grid.Column>
                        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                            <Card as={Link} to={{pathname: '/projects/new', query: {createProject: this.props.createProject}}} style={{backgroundColor: 'grey'}}>
                                <Card.Content>
                                    <Card.Header>Create Project</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row> 
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '10px'}}>                                
                    <Grid.Row columns={2} style={{padding: 0}}>
                        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                            <Card as={Link} to={{pathname: '/blog/edit', query: {editBlog: this.props.editBlog, blog: this.props.blog}}} style={{backgroundColor: 'grey'}}>
                                <Card.Content>
                                    <Card.Header>Edit Blog</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                            <Card as={Link} to={{pathname: '/posts/new', query: {createPost: this.props.createPost}}} style={{backgroundColor: 'grey'}}>
                                <Card.Content>
                                    <Card.Header>Create Post</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid.Row> 
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '10px'}}>                 
                    <Grid.Row columns={2} style={{padding: 0}}>                         
                        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                            <Card as={Link} to={{pathname: '/resume/edit', query: {editResume: this.props.editResume, resume: this.props.resume}}} style={{backgroundColor: 'grey'}}>
                                <Card.Content>
                                    <Card.Header>Edit Resume</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                            <Card as={Link} to={{pathname: '/categories/new', query: {createCategory: this.props.createCategory}}} style={{backgroundColor: 'grey'}}>
                                <Card.Content>
                                    <Card.Header>Create Category</Card.Header>
                                </Card.Content>
                            </Card>
                        </Grid.Column>                                                                                    
                    </Grid.Row>                   
                </Grid>
                <Grid divided='vertically' textAlign='center' style={{padding: '10px'}}>
                    <Grid.Row columns={1} style={{padding: 0}}>
                        <Grid.Column style={{maxWidth: 300, padding: 0, margin: 7}}>
                            <Card as={Link} to={{pathname: '/skills/new', query: {createSkill: this.props.createSkill}}} style={{backgroundColor: 'grey'}}>
                                <Card.Content>
                                    <Card.Header>Create Skill</Card.Header>
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
        skills: state.manageSkills.skills,
        home: state.manageHome.home,
        about: state.manageAbout.about,
        portfolio: state.managePortfolio.portfolio,
        blog: state.manageBlog.blog,
        resume: state.manageResume.resume      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (user, next) => {dispatch(signup(user, next))},
        login: (user, next) => {dispatch(login(user, next))},
        logout: (user) => {dispatch(logout(user))},
        getHome: () => {dispatch(getHome())},
        editHome: (home, next) => {dispatch(editHome(home, next))},
        getAbout: () => {dispatch(getAbout())},
        editAbout: (about, next) => {dispatch(editAbout(about, next))},
        getPortfolio: () => {dispatch(getPortfolio())},
        editPortfolio: (portfolio, next) => {dispatch(editPortfolio(portfolio, next))},
        getProjects: () => {dispatch(getProjects())},
        createProject: (project, next) => {dispatch(createProject(project, next))}, 
        editProject: (project, next) => {dispatch(editProject(project, next))},
        getBlog: () => {dispatch(getBlog())},
        editBlog: (blog, next) => {dispatch(editBlog(blog, next))},
        getPosts: () => {dispatch(getPosts())},
        createPost: (post, next) => {dispatch(createPost(post, next))},
        editPost: (post, next) => {dispatch(editPost(post, next))},
        getResume: () => {dispatch(getResume())},
        editResume: (resume, next) => {dispatch(editResume(resume, next))},
        getCategories: () => {dispatch(getCategories())},
        createCategory: (category, next) => {dispatch(createCategory(category, next))},
        editCategory: (category, next) => {dispatch(editCategory(category, next))},
        editContact: (contact, next) => {dispatch(editContact(contact, next))},
        getSkills: () => {dispatch(getSkills())},
        createSkill: (skill, next) => {dispatch(createSkill(skill, next))},
        editSkill: (skill, next) => {dispatch(editSkill(skill, next))},
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)