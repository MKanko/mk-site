import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminHome from './containers/AdminHomeContainer'
import Login from './components/admin/registrations/Login'
import Signup from './components/admin/registrations/Signup'
import NavBar from './components/navigation/NavBar'
import Home from './containers/HomeContainer'
import About from './containers/AboutContainer'
import PortfolioContainer from './containers/PortfolioContainer'
import BlogContainer from './containers/BlogContainer'
import ResumeContainer from './containers/ResumeContainer'
import EditHome from './components/admin/home/EditHome'
import EditAbout from './components/admin/about/EditAbout'
import EditPortfolio from './components/admin/portfolio/EditPortfolio'
import EditProject from './components/admin/portfolio/project/EditProject'
import ProjectShow from './components/project/ProjectShow'
import PostShow from './components/post/PostShow'
import EditBlog from './components/admin/blog/EditBlog'
import EditPost from './components/admin/blog/post/EditPost'
import EditResume from './components/admin/resume/EditResume'
import EditCategory from './components/admin/resume/category/EditCategory'
import Contact from './containers/ContactContainer'
import EditContact from './components/admin/contact/EditContact'
import PageEffect from './components/transition/PageEffect'
import EmailNew from './components/email/EmailNew'
import SkillIndex from './components/skill/SkillIndex'
import EditSkill from './components/admin/skill/EditSkill'
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
                            this.renderWithEffect(props, ProjectShow, 'horizontal flip', 1500)
                        )} />
                        <Route exact path='/blog' render={(props) => (
                            this.renderWithEffect(props, BlogContainer)
                        )} />
                        <Route path='/posts/:post' render={(props) => (
                            this.renderWithEffect(props, PostShow, 'horizontal flip', 1500)
                        )} />
                        <Route exact path='/resume' render={(props) => (
                            this.renderWithEffect(props, ResumeContainer)
                        )} />
                        <Route exact path='/contact' render={(props) => (
                            this.renderWithEffect(props, Contact)
                        )} />
                        <Route path='/categories/:category' render={(props) => (
                            this.renderWithEffect(props, CategoryShow, 'horizontal flip', 1500)
                        )} />
                                         
                        <Route exact path='/admin/home' component={AdminHome} />                                                      
                        <Route exact path='/signup' component={Signup} />
                        <Route exact path='/login' component={Login} />

                        <Route exact path='/home/edit' component={EditHome} />
                        <Route exact path='/about/edit' component={EditAbout} />
                        <Route exact path='/portfolio/edit' component={EditPortfolio} />
                        <Route exact path='/project/edit' component={EditProject} />
                        <Route exact path='/blog/edit' component={EditBlog} />
                        <Route exact path='/post/edit' component={EditPost} />
                        <Route exact path='/resume/edit' component={EditResume} />
                        <Route exact path='/category/edit' component={EditCategory}/>
                        <Route exact path='/contact/edit' component={EditContact} />
                        <Route exact path='/emails' component={EmailNew} />
                        <Route exact path='/skills' component={SkillIndex} />
                        <Route exact path='/skill/edit' component={EditSkill} />                            
                    </Switch>
                </Router>
            </div>
        )
    }

} 

export default App

