import React, { useEffect } from 'react';

import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


function Navigation(props) {
  const { navItems = [], setCurrentNavItem, currentNavItem } = props;
  useEffect(() => {
    if (currentNavItem === 'home') {
      document.title = 'JB Blot';
    } else {
      document.title = currentNavItem.name;
    }
  }, [currentNavItem]);
  return (
    <Nav style={{justifyContent: 'space-between'}}>
        {navItems.map((navItem) => (
          <Nav.Item
            className={`mx-2 ${
              currentNavItem.name === navItem.name && 'navActive'
            }`}
            key={navItem.short}
          >
            <Button variant="--color2">
            <a
              href={`#${navItem.short}`}
              onClick={() => {
                setCurrentNavItem(navItem);
              }}
            >
              {navItem.name}
            </a>
            </Button>

          </Nav.Item>
        ))}
    </Nav>
  );
}
export default Navigation;




