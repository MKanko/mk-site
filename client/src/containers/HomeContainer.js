import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getHome } from '../actions'

class HomeContainer extends Component {

    componentDidMount() {
        this.props.getHome()
    }

    render() {
        return (
            <HomeDetail home={this.props.home} />
        )
    }

}

const mapStateToProps = (state) => {
    return {home: state.manageHome.home}
}

const mapDispatchToProps = (dispatch) => {
    return {getHome: () => {dispatch(getHome())}}
} 

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)