import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import bgimage from './assets/img/background.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron'


function App() {
  const [navItems] = useState([
    {
      name: 'About me',
      short: 'about',
    },
    {
      name: 'Portfolio',
      short: 'portfolio',
    },
    {
      name: 'Contact',
      short: 'contact',
    },
    {
      name: 'Resume',
      short: 'resume',
    },
  ]);
  const [currentNavItem, setCurrentNavItem] = useState('home');
  function displayComponent(navName) {
    switch (navName) {
      case 'Portfolio':
        return <Project></Project>;
      case 'Contact':
        return <ContactForm></ContactForm>;
      case 'Resume':
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  }
  return (

    <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover', width: '100vw', height: '100vh' }}>
      <Container className="App">
        <Header
          navItems={navItems}
          setCurrentNavItem={setCurrentNavItem}
          currentNavItem={currentNavItem}
        ></Header>

        <Row>
          <Col>
            {displayComponent(currentNavItem.name)}
          </Col>
        </Row>

        <Row className="align-items-center footer">
          <Footer></Footer>
        </Row>

      </Container>
    </Jumbotron>


  );
}
export default App;