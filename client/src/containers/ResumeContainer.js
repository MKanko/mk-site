import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Grid, Button } from 'semantic-ui-react'

import CategoryIndex from '../components/category/CategoryIndex'
import { getResume } from '../actions'

class ResumeContainer extends Component {

    componentDidMount() {
        this.props.getResume()
    }

    // <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'></Grid>

    render() {

        const resume = '/images/MKanko Resume.pdf'

        return (
            <Grid container textAlign='center' style={{ height: '100vh', padding: '50px' }} verticalAlign='middle'>
                <Grid.Row columns={1}>
                    <Grid.Column >
                        <Header as='h1' style={{color: '#DBCE07'}} textAlign='center'>
                            {this.props.title}
                        </Header>
                        {/* <Segment inverted secondary></Segment> */}
                        <h4 style={{color: 'white'}}>{this.props.text_content}</h4>                       
                        <Button style={{textAlign: 'center'}} size='mini'color='grey' href={resume} target='_blank' rel='noopener noreferrer'>Download Resume</Button>
                    </Grid.Column>           
                </Grid.Row>                 
                <CategoryIndex categories={this.props.categories} /> 
            </Grid>
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