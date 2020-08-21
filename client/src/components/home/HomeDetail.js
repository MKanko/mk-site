import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import Carousel from './Carousel'

const HomeDetail = (props) => {

    return (
        <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 800 }}>               
                    <Header as='h1' size='huge' style={{color: '#DBCE07', fontSize: '3vw'}} textAlign='center'>
                        {props.home.title}
                    </Header>
                    {/* <Image src={process.env.PUBLIC_URL + props.home.image} /> */}
                    {/* <Segment inverted secondary>
                        {props.home.text_content}
                    </Segment> */}
                        <Carousel displayPhrases={props.home.display_phrases} />
                    
                    <Header as='h1' size='huge' style={{color: 'green'}} textAlign='center'> </Header>                                     
            </Grid.Column>           
        </Grid>
    )
}

export default HomeDetail