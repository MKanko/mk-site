import React, { Component } from 'react'
import { Grid, Transition, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { getCategory } from '../../actions'


class CategoryShow extends Component {

    componentDidMount() {
        this.props.getCategory(this.props.location.pathname.replace('/categories/', ''))
    }

    render() {
        return (
            <div>          
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Transition animation={'drop'} duration={2000} transitionOnMount>
                        <Grid.Column style={{ maxWidth: 600 }}>
                            <Header as='h1' color='green' textAlign='center'>
                                {this.props.title}
                            </Header>
                            <Segment inverted secondary>
                                {this.props.text_content}
                            </Segment>
                        </Grid.Column>
                    </Transition>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        title: state.manageCategories.category.title,
        text_content: state.manageCategories.category.text_content,
        image: state.manageCategories.category.image
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getCategory: (id) => {dispatch(getCategory(id))}}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow)