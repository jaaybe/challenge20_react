import React from 'react';
import Navigation from '../Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {
    const { navItems = [], setCurrentNavItem, currentNavItem } = props;
    return (
        <Row className="align-items-center">
            <Col>
                <h1>
                    <a href="/">JB BLOT</a>
                </h1>
            </Col>
            <Col>
                <Navigation
                    navItems={navItems}
                    setCurrentNavItem={setCurrentNavItem}
                    currentNavItem={currentNavItem}
                ></Navigation>
            </Col>
        </Row>
    );
}
export default Header;