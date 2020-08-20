import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import Carousel from './Carousel'

const HomeDetail = (props) => {
// console.log('homeDetail:', props)
    // const genDisplayPhrase = props.home.display_phrases.map(phrase => <Carousel phrase={phrase}/>)

    return (
        <Grid container textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h1' color='green' textAlign='center'>
                    {props.home.title}
                </Header>
                    {/* <Image src={process.env.PUBLIC_URL + props.home.image} /> */}
                {/* <Segment inverted secondary>
                    {props.home.text_content}
                </Segment> */}                
                <Carousel displayPhrases={props.home.display_phrases} />                            
            </Grid.Column>           
        </Grid>
    )
}

export default HomeDetail