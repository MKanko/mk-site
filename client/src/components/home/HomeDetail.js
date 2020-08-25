import React from 'react'
import { Grid, Header, Container } from 'semantic-ui-react'

import Carousel from './Carousel'

{/* <Grid container textAlign='center' style={{ height: '100vh', maxWidth: 2000 }} verticalAlign='middle'></Grid> */}

const HomeDetail = (props) => {

    return (
        <Grid divided='vertically' textAlign='center' style={{ marginTop: '30vh'}}>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 800 }}>               
                        <Header as='h1' size='huge' style={{color: '#DBCE07', fontSize: '3vw'}} textAlign='center'>
                            {props.home.title}
                        </Header>
                        <h3 style={{ color: 'grey' }}>
                            {props.home.secondary_title}
                        </h3>
                        <Header>
                            <Carousel displayPhrases={props.home.display_phrases} /> 
                        </Header>                     
                </Grid.Column> 
            </Grid.Row>
            <Grid.Row textAlign={'center'}>                   
                <Grid container textAlign={'center'} verticalAlign={'middle'} style={{height: '8vw'}}>      
                    <Grid.Row style={{height: '5vw', color: 'grey', marginTop: '30vh'}}>
                        <Grid.Column>
                            {props.home.text_content}
                        </Grid.Column>
                        
                    </Grid.Row>            
                </Grid>                                                           
            </Grid.Row>                   
        </Grid>
    )
}

export default HomeDetail