import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavBar from '../navigation/NavBar'



class Home extends Component {

    render() {
        return (
            <div>
                <NavBar />
            </div>
        )
    }

}

export default connect(null)(Home)