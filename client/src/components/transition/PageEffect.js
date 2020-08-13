// import React, { Component } from 'react'
// import { Transition, Grid } from 'semantic-ui-react'

// import { getPortfolio } from '../../actions/index'
// import { connect } from 'react-redux'

// class PageEffect extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             visible: false
//         }
//     }

//     componentDidMount() {
//         this.props.getPortfolio()
//         this.setState({
//             visible: true 
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//                     <Transition.Group animation={'drop'} duration={2500} visible={this.state.visible}>      
//                         {React.cloneElement(this.props.children, {...this.props.portfolio} )}
//                     </Transition.Group>
//                 </Grid>
//             </div>
//         )
//     }


// }

// const mapStateToProps = (state) => ({
//     portfolio: state.managePortfolio.portfolio
// })

// export default connect(mapStateToProps, { getPortfolio })(PageEffect)