import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Header, Grid } from 'semantic-ui-react'

class Home extends Component {

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='green' textAlign='center'>Welcome to my World!</Header>
                    </Grid.Column>
                </Grid>
                {/* <h2>{this.state.home.title}</h2>
                <p>{this.state.home.text_content}</p> */}
            </div>
        )
    }

}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         title: state.home.title,
//         text_content: state.home.text_content,
//         image: state.home.image 
//     }
// }

export default Home