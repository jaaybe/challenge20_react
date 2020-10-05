import React from 'react';

import p1 from '../../assets/img/project1.jpg';
import p2 from '../../assets/img/project2.png';
import p3 from '../../assets/img/project3.png';
import p4 from '../../assets/img/project4.png';
import p5 from '../../assets/img/project5.png';
import p6 from '../../assets/img/project6.png';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Project() {
  return (

<Row className='row-cols-1'>
<Col>


<Card>
        <Card.Img variant="top" src={p1} />
        <Card.Body>
          <Card.Title>Run Buddy</Card.Title>
          <Card.Text>
            Our very first lesson where we learned about HTML and CSS.
    </Card.Text>
    <a
                        href="https://github.com/jaaybe/run-buddy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={p2} />
        <Card.Body>
          <Card.Title>Covie Search</Card.Title>
          <Card.Text>
            This was our first Group Challenge.  We utized various technologies including HTML, CSS, Javascript, Boostrap, Moment.js, Plotly.js and 3rd Party APIs.
    </Card.Text>
    <a
                        href="https://github.com/jaaybe/covidsearch"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={p3} />
        <Card.Body>
          <Card.Title>Trakster</Card.Title>
          <Card.Text>
            This was our second Group Challenge.  We utilized Node.js, Express,js, MySQL, Sequelize ORM.
    </Card.Text>
    <a
                        href="https://github.com/pv95335/trakster"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={p4} />
        <Card.Body>
          <Card.Title>Pizza Hunt</Card.Title>
          <Card.Text>
            Pizza Hunt focuses on Mongoose and MongoDb.
    </Card.Text>
    <a
                        href="https://github.com/jaaybe/pizza-hunt"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={p5} />
        <Card.Body>
          <Card.Title>Oh Snap!</Card.Title>
          <Card.Text>
            This app was our first chance at utizing React.  
    </Card.Text>
    <a
                        href="https://github.com/jaaybe/photo-port"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src={p6} />
        <Card.Body>
          <Card.Title>Budget Tracker</Card.Title>
          <Card.Text>
            This was was fully deployed on Heroku and utilizes Javascript, MongoDb (Mongoose), Node, and Express.  This is also our first attempt at creating a PWA. 
    </Card.Text>
    <a
                        href="https://github.com/jaaybe/challenge19_budget"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
        </Card.Body>
      </Card>


</Col>
</Row>

  );
}
export default Project;