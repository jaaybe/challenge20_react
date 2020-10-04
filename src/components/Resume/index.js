import React from 'react';

import Media from 'react-bootstrap/Media';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import JbResume from '../../assets/pdf/jbResume.pdf';


function Resume() {
    return (
                <Media style={{display: 'block'}}>
                    <Media.Body>
                        <h5>Front-end Proficiencies</h5>
                        <p>
                        <ListGroup variant="flush">
  <ListGroup.Item>REACT</ListGroup.Item>
  <ListGroup.Item>Bootstrap</ListGroup.Item>
  <ListGroup.Item>CSS</ListGroup.Item>
  <ListGroup.Item>HTML</ListGroup.Item>
</ListGroup>
    </p>
                    </Media.Body>
                    <Media.Body>
                        <h5>Back-end Proficiencies</h5>
                        <p>
                        <ListGroup variant="flush">
  <ListGroup.Item>JavaScript</ListGroup.Item>
  <ListGroup.Item>Node</ListGroup.Item>
  <ListGroup.Item>Express</ListGroup.Item>
  <ListGroup.Item>MySQL</ListGroup.Item>
  <ListGroup.Item>NoSQL (MongoDb)</ListGroup.Item>
</ListGroup>
    </p>
                    </Media.Body>
                    <Media.Body>
                    To download a PDF version of my full Resume, please click<Badge pill>
                        <a 
                        href={JbResume} 
                        target='_blank'
                        rel="noopener noreferrer"
                        >HERE</a>
                        </Badge>
                    </Media.Body>
                </Media>

    );
}

export default Resume;