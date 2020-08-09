import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminHome from './containers/AdminHomeContainer'
import Login from './components/admin/registrations/Login'
import Signup from './components/admin/registrations/Signup'
import NavBar from './components/navigation/NavBar'
import Home from './components/home/Home'
import About from './components/about/About'
import PortfolioContainer from './containers/PortfolioContainer'
import BlogContainer from './containers/BlogContainer'
import ResumeContainer from './containers/ResumeContainer'
import ContactContainer from './containers/ContactContainer'
import EditHome from './components/admin/home/EditHome'
import EditAbout from './components/admin/about/EditAbout'
import EditPortfolio from './components/admin/portfolio/EditPortfolio'
import ProjectShow from './components/project/ProjectShow'


class App extends Component { 
    
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home/edit' component={EditHome} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/about/edit' component={EditAbout} />
                        <Route exact path='/portfolio' component={PortfolioContainer} />
                        <Route exact path='/portfolio/edit' component={EditPortfolio} />
                        <Route exact path='/blog' component={BlogContainer} />
                        <Route exact path='/resume' component={ResumeContainer} />
                        <Route exact path='/contact' component={ContactContainer} />
                        <Route path='/projects/:project' component={ProjectShow} />

                        <Route exact path='/admin/home' component={AdminHome} />                           
                        <Route exact path='/login' component={Login} />                            
                        <Route exact path='/signup' component={Signup} />                           
                    </Switch>
                </Router>
            </div>
        )
    }

} 

export default App

