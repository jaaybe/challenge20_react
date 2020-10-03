import React from 'react';

import Col from 'react-bootstrap/Col';

// import coverImage from '../../assets/img/JULIA-030719-165119-8663.jpg';

function Footer() {
    return (
            <Col className="d-inline-flex justify-content-around">
                <div>
                    <a
                        href="https://www.linkedin.com/in/motionmusic/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div>
                    <a
                        href="https://github.com/jaaybe"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div>
                    <a
                        href="https://stackoverflow.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-stack-overflow"></i>
                    </a>
                </div>
            </Col>
    );
}
export default Footer;