import React, { Component } from 'react'
// import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import AdminHome from './components/admin/AdminHome'
import Login from './components/admin/registrations/Login'
import Signup from './components/admin/registrations/Signup'

class App extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isLoggedIn: false,
    //         user: {}
    //     }
    // }

    // componentDidMount() {
    //     this.loginStatus()
    // }

    // loginStatus = () => {
    //     axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    //         .then(response => {
    //             if (response.data.logged_in) {
    //                 this.handleLogin(response)
    //             } else {
    //                 this.handleLogout()
    //             }
    //         })
    //         .catch(error => console.log('api errors:', error)) 
    // }

    // handleLogin = (data) => {
    //     this.setState({
    //         isLoggedIn: true,
    //         user: data.user 
    //     })
    // }

    // handleLogout = () => {
    //     this.setState({
    //         isLoggedIn: false,
    //         user: {}
    //     })
    // } 
    
    render() {
        return (
            <div>
                <Router>
                    <Switch>
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

