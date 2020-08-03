import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { signup, login, logout } from '../../actions'

class AdminHome extends Component {

    handleClick = () => {
        let next = {
            redirect: () => this.props.history.push('/admin/home')
        }
        this.props.logout(next)
    }

    render() {
        return (
            <div>
                <Link to={{pathname: '/login', query: {login: this.props.login}}}>Log In</Link>
                <br></br>
                <Link to={{pathname: '/signup', query: {signup: this.props.signup}}}>Sign Up</Link>
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

export default connect(mapStateToProps, { signup, login, logout })(AdminHome)