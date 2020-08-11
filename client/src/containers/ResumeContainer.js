import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Segment } from 'semantic-ui-react'
import CategoryIndex from '../components/category/CategoryIndex'

import { getResume } from '../actions'

class ResumeContainer extends Component {

    componentDidMount() {
        this.props.getResume()
    }

    render() {
        return (
            <div>
                <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Row columns={1}>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h1' color='yellow' textAlign='center'>
                                Hello World
                            </Header>
                            <Segment inverted secondary>
                                Hello World
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <CategoryIndex categories={this.props.categories} />
                    {/* <Grid.Row>
                        <Grid.Column width={8}>
                            <Segment inverted secondary>
                                Hello World
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment inverted secondary>
                                Hello World
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Segment inverted secondary>
                                Hello World
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment inverted secondary>
                                Hello World
                            </Segment>
                        </Grid.Column>
                    </Grid.Row> */}
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.manageResume.resume.title,
        text_content: state.manageResume.resume.text_content,
        categories: state.manageResume.resume.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {getResume: () => {dispatch(getResume())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(ResumeContainer)