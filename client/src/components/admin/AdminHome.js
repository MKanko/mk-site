import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

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
                <Container textAlign='center'>
                    <Button.Group vertical>
                        <Button>
                            <Link to={{pathname: '/login', query: {login: this.props.login}}}>Log In</Link>
                        </Button>                      
                        <Button>
                            <Link to={{pathname: '/signup', query: {signup: this.props.signup}}}>Sign Up</Link>
                        </Button>                      
                        {this.props.manageAdmin.isLoggedIn ? <Button><Link to='/logout' onClick={this.handleClick}>Log Out</Link></Button> : null}
                    </Button.Group>
                </Container>               
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