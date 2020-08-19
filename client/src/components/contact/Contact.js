// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { Header, Grid, Segment } from 'semantic-ui-react'

// import { getContact, createEmail } from '../../actions'
// import EmailNew from '../email/EmailNew'

// class Contact extends Component {

//     componentDidMount() {
//         this.props.getContact()
//     }

//     render() {

//         return (
//             <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
//                 <Grid.Column style={{ maxWidth: 800 }}>
//                     <Header as='h1' style={{color: '#0E15FA'}} textAlign='center'>
//                         {this.props.title}
//                     </Header>
//                     <Segment inverted secondary>
//                         <p>{this.props.name}</p>
//                         <p>{this.props.phone}</p>
//                         <p>{this.props.email}</p>
//                     </Segment>
//                     <Segment inverted secondary>
//                         <EmailNew createEmail={this.props.createEmail} history={this.props.history} formStatus={this.props.formStatus} />
//                     </Segment>
//                 </Grid.Column>
//             </Grid>
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     console.log('contactstate:', state)
//     return {
//         title: state.manageContact.contact.title,
//         name: state.manageContact.contact.name,
//         phone: state.manageContact.contact.phone,
//         email: state.manageContact.contact.email,
//         link_1: state.manageContact.contact.link_1,
//         link_2: state.manageContact.contact.link_2,
//         formStatus: state.manageEmails.status 
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getContact: () => {dispatch(getContact())},
//         createEmail: (email, next) => {dispatch(createEmail(email, next))}
//     }

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Contact)