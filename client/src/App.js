import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminContainer from './containers/AdminContainer'
import Login from './components/admin/registrations/Login'
import Signup from './components/admin/registrations/Signup'
import NavBar from './components/navigation/NavBar'
import Home from './containers/HomeContainer'
import About from './containers/AboutContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import BlogContainer from './containers/BlogContainer'
import ResumeContainer from './containers/ResumeContainer'
import EditHome from './components/admin/home/HomeEdit'
import EditAbout from './components/admin/about/AboutEdit'
import EditPortfolio from './components/admin/portfolio/PortfolioEdit'
import ProjectNew from './components/admin/portfolio/project/ProjectNew'
import EditProject from './components/admin/portfolio/project/ProjectEdit'
import ProjectShow from './components/project/ProjectShow'
import PostShow from './components/post/PostShow'
import EditBlog from './components/admin/blog/BlogEdit'
import PostNew from './components/admin/blog/post/PostNew'
import EditPost from './components/admin/blog/post/PostEdit'
import EditResume from './components/admin/resume/ResumeEdit'
import Contact from './containers/ContactContainer'
import EditContact from './components/admin/contact/ContactEdit'
import PageEffect from './components/transition/PageEffect'
import EmailNew from './components/email/EmailNew'
import SkillIndex from './components/skill/SkillIndex'
import SkillNew from './components/admin/skill/SkillNew'
import EditSkill from './components/admin/skill/SkillEdit'
import CategoryNew from './components/admin/resume/category/CategoryNew'
import EditCategory from './components/admin/resume/category/CategoryEdit'
import CategoryShow from './components/category/CategoryShow'

class App extends Component { 

    renderWithEffect = (props, Component, animation, duration) => {
        return (
            <PageEffect key={Date.now()} animation={animation} duration={duration}>
                <Component {...props} />
            </PageEffect>
        )
    }
    
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path='/admin/home' component={AdminContainer} />                                                      
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/login' component={Login} />

                        <Route exact path='/home/edit' component={EditHome} />
                        <Route exact path='/about/edit' component={EditAbout} />
                        <Route exact path='/portfolio/edit' component={EditPortfolio} />
                        <Route exact path='/projects/new' component={ProjectNew} />
                        <Route exact path='/project/edit' component={EditProject} />
                        <Route exact path='/blog/edit' component={EditBlog} />
                        <Route exact path='/posts/new' component={PostNew} />
                        <Route exact path='/post/edit' component={EditPost} />
                        <Route exact path='/resume/edit' component={EditResume} />
                        <Route exact path='/categories/new' component={CategoryNew} />
                        <Route exact path='/category/edit' component={EditCategory}/>
                        <Route exact path='/contact/edit' component={EditContact} />
                        <Route exact path='/emails' component={EmailNew} />
                        <Route exact path='/skills' component={SkillIndex} />
                        <Route exact path='/skills/new' component={SkillNew} />
                        <Route exact path='/skill/edit' component={EditSkill} />

                        <Route exact path='/' render={(props) => (
                            this.renderWithEffect(props, Home)
                        )} />
                        <Route exact path='/about' render={(props) => (
                            this.renderWithEffect(props, About)
                        )} />
                        <Route exact path='/portfolio' render={(props) => (
                            this.renderWithEffect(props, PortfolioContainer)
                        )} />
                        <Route path='/projects/:project' render={(props) => (
                            this.renderWithEffect(props, ProjectShow, 'horizontal flip', 2500)
                        )} />
                        <Route exact path='/blog' render={(props) => (
                            this.renderWithEffect(props, BlogContainer)
                        )} />
                        <Route path='/posts/:post' render={(props) => (
                            this.renderWithEffect(props, PostShow, 'horizontal flip', 2500)
                        )} />
                        <Route exact path='/resume' render={(props) => (
                            this.renderWithEffect(props, ResumeContainer)
                        )} />
                        <Route exact path='/contact' render={(props) => (
                            this.renderWithEffect(props, Contact)
                        )} />
                        <Route path='/categories/:category' render={(props) => (
                            this.renderWithEffect(props, CategoryShow, 'horizontal flip', 2500)
                        )} />                           
                    </Switch>
                </Router>
            </div>
        )
    }

} 

export default App

