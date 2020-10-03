import React from 'react';

import Media from 'react-bootstrap/Media';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Resume() {
    return (
        <Row>
            <Col md={4}>
                <Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>Media Heading</h5>
                        <p>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                            Donec lacinia congue felis in faucibus.
    </p>
                    </Media.Body>
                </Media>
            </Col>


        </Row>

    );
}

export default Resume;