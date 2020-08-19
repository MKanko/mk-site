import React from 'react'
import { Grid, Header, Segment} from 'semantic-ui-react'

import EmailNew from '../email/EmailNew'

const ContactDetail = (props) => {

    return (
        <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 800 }}>
                    <Header as='h1' style={{color: '#0E15FA'}} textAlign='center'>
                        {props.contact.title}
                    </Header>
                    <Segment inverted secondary>
                        <p>{props.contact.name}</p>
                        <p>{props.contact.phone}</p>
                        <p>{props.contact.email}</p>
                    </Segment>
                    <Segment inverted secondary>
                        <EmailNew createEmail={props.createEmail} history={props.history} formStatus={props.formStatus} />
                    </Segment>
                </Grid.Column>
            </Grid>
    )

}

export default ContactDetail