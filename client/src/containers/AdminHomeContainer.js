import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Container, Grid } from 'semantic-ui-react'

import { signup, login, logout } from '../actions'

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
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Container textAlign='center'>
                            <Button.Group vertical>
                                <Button>
                                    <Link to={{pathname: '/login', query: {login: this.props.login}}}><h3>Log In</h3></Link>
                                </Button>                      
                                <Button>
                                    <Link to={{pathname: '/signup', query: {signup: this.props.signup}}}><h3>Sign Up</h3></Link>
                                </Button>                      
                                {this.props.manageAdmin.isLoggedIn ? <Button><Link to='/logout' onClick={this.handleClick}><h3>Log Out</h3></Link></Button> : null}
                            </Button.Group>
                        </Container>
                     </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        manageAdmin: state.manageAdmin
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         signup: (user, next) => {dispatch(signup(user, next))},
//         login: (user, next) => {dispatch(login(user, next))},
//         logout: (user) => {dispatch(logout(user))}
//     }
// }

export default connect(mapStateToProps, { signup, login, logout })(AdminHome)