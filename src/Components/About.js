import React from 'react'
import {Container, Button, Divider, Grid, Header,  Image, Segment} from 'semantic-ui-react'
import decor from '../images/decor.jpg'
import {Link} from 'react-router-dom'


const About = () => {

  return(
    <div>
      <Container>
        <Segment style={{padding: '8em 0em'}} vertical>
          <Grid stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{fontSize: '2em'}}>
                   OUR STORY
                 </Header>
                <p style={{fontSize: '1.33em'}}>
                    We are IPLANT - Boutique plant shop in Seattle, WA. We are a team with a passion for delivering happiness and sharing our love of plants. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                 </p>
                 <Header as='h3' style={{fontSize: '2em'}} >
                    NOT YOUR AVERAGE PLANT SHOP
                 </Header>
                 <p style={{fontSize: '1.33em'}}>
                    Although plant shops are becoming increasingly popular these days, IPLANT does differ in a few ways. Not only do we have an entire floor dedicated to a wide variety of locally grown house plants, but we also offer workshops and have a full bar. Additionally, our space is available for rent.
                 </p>
               </Grid.Column>
               <Grid.Column floated='right' width={6}>
                 <Image 
                 boardered
                 rounded
                 size='large'
                 src={decor} />
               </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Link to='/all-plants'>
                  <Button size='huge' color='olive'>Start Shopping</Button>
                  </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Segment>
          </Container>
        
            <Divider as='h4' className='header' horizontal style={{margin: '1em 0em', textTransform: 'uppercase' }}>
              How to find us
            </Divider>

          <Segment style={{padding: '8m 0em'}} vertical>
            <Container textAlign='center'>
            <Header as='h4' style={{fontSize: '1.5em'}}>
              IPLANT Boutique Plant Shop 
            </Header>
            <p style={{fontSize: '1.33em'}}>
              We are located in the heart of Seattle, WA. Swing by our shop to create your own treasure!
              <br/>
              111 2nd Ave N, Seattle, WA 98109
              <br/>
              Tel: +1(206)777-7777
            </p>
            </Container>
          </Segment>

    </div>
   
  )
}

export default About