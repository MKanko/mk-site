import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import MDEditor from '@uiw/react-md-editor'

import Carousel from './Carousel'

const HomeDetail = (props) => {

    return (
        <Grid divided='vertically' textAlign='center' style={{ marginTop: '30vh'}}>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 800 }}>               
                        <Header as='h1' size='huge' style={{color: '#DBCE07', fontSize: '3vw'}} textAlign='center'>
                            {props.home.title}
                        </Header>
                        <Header>
                            <Carousel displayPhrases={props.home.display_phrases} /> 
                        </Header> 
                        <h3 style={{ color: 'grey' }}>
                            {props.home.secondary_title}
                        </h3>                    
                </Grid.Column> 
            </Grid.Row>
            <Grid.Row textAlign={'center'}>                   
                <Grid container textAlign={'center'} verticalAlign={'middle'} style={{height: '8vw'}}>      
                    <Grid.Row style={{height: '5vw', color: 'grey', marginTop: '0vh'}}>
                        <Grid.Column style={{maxWidth: 650}}>
                        <MDEditor.Markdown source={props.home.text_content} />
                            
                        </Grid.Column>                       
                    </Grid.Row> 
                    <Grid.Row>
                        <Grid.Column>
                        <h3 style={{color: '#DBCE07'}}>Bring It!</h3>
                        </Grid.Column>
                    </Grid.Row>           
                </Grid>                                                           
            </Grid.Row>                   
        </Grid>
    )
}

export default HomeDetail