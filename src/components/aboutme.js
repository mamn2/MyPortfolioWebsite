import React, { Component } from 'react';
import JuchePic from './photos/JucheFull.jpg';
import FlumeGorge from './photos/FlumeGorge.jpg';
import FlumeGorge2 from './photos/FlumeGorge2.jpg';
import HungarianPic from './photos/HungarianSquare.png';
import { Grid, Cell } from 'react-mdl';
import BusinessPic from './photos/Business Pic 2 Copy.jpg';


class About extends Component {
  render() {
    return(
      <div className='about-body'>
        <Grid className='about-grid'>
          <Cell col={6}>
            <h3>About Me</h3>
            <p style={{width: '75%', margin: 'auto', paddingTop: '0em'}}>
              Wow! A whole page to write about me?? This is going to be fun!<br></br><br></br>
              Hey there, I'm Mohamed, an enthusiastic musician, traveller, and software engineer.
              I'm so glad to see that you've stumbled upon my page!
              As you may know, I am a student at UIUC, majoring in computer science and music. That's right,
              the two coolest majors on campus. I have the privilege of being able to combine
              my two favorite things, and do it for a living!
              <br></br><br></br>Alongside my love for science and music, I am a history nut, having travelled
              to over two dozen countries. Yet despite my infatuation over what once was,
              I am in a constant state of excitement over what the future brings us, and therefore,
              would like to do my part in engineering it! If you share my goals, please feel free
              to contact me about potential projects/jobs.

            </p>

          </Cell>
          <Cell col={6}>

            <div className='pics'>

            <img
              className='aboutme-pic1'
              src={HungarianPic}
              alt="avatar"
            />
            <img
              className='aboutme-pic2'
              src={FlumeGorge2}
              alt="avatar"
            />

              {/*<List>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    1 (331) 643 6832
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    /in/mohamedamn
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton',}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    mamn2@illinois.edu
                  </ListItemContent>
                </ListItem>

              </List>*/}

            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
