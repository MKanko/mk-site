import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { signup } from '../../actions'

class AdminHome extends Component {

    handleClick = () => {
        axios.delete('http://localhost:3001/logout', {withCredentials: true})
            .then(response => {
                this.props.handleLogout()
                this.props.history.push('/admin/home')
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Link to='/login'>Log In</Link>
                <br></br>
                <Link to={{pathname: '/signup', query: {signup: this.props.signup, errors: this.props.manageAdmin.errors}}}>Sign Up</Link>
                <br></br>
                {this.props.manageAdmin.isLoggedIn ? <Link to='/logout' onClick={this.handleClick}>Log Out</Link> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        manageAdmin: state.manageAdmin
    }
}

export default connect(mapStateToProps, { signup })(AdminHome)