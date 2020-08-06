import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminHome from './containers/AdminHomeContainer'
import Login from './components/admin/registrations/Login'
import Signup from './components/admin/registrations/Signup'
import Home from './components/home/Home'
import NavBar from './components/navigation/NavBar'

class App extends Component { 
    
    render() {
        return (
            <div>
                <NavBar />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
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

