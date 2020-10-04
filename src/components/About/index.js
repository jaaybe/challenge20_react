import React from 'react';
import Portrait from '../../assets/img/portrait.png';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';

function About() {
  return (
<Container style={{alignContent: "center"}}>
<Col>
<Row style={{flex: 'auto', paddingTop: '50px'}}>
<Figure>
  <Figure.Image
    width={136}
    height={192}
    alt="JB Blot - Portrait Photo"
    src={Portrait}
  />
  <Figure.Caption>
  JB at the Grammys 2018
  </Figure.Caption>
</Figure>
<div>
Passionate and Innovative Live Music & Event Director and Producer with over 16 years of experience producing and executing Live Shows, Music Tours and Events, and TV Appearances in over 90 countries for millions of fans. Known for creating truly immersive and engaging events and shows, while still being able to accurately project all financials and manage large teams of performers, crews, and vendors. Created a proprietary system for tracking expenses in real time to enable the customer to make changes to their Music Tour and Events before it’s too late. This includes utilizing this system to recognize trends in sales & expenses, and adjusting course when needed. Able to recognize talent and potential in staff, and build specialized teams to accomplish complex goals while minimizing costs. Personally invests in team members to maximize their potential.
</div>
</Row>
</Col>
</Container>



  );
}
export default About;