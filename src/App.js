import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';


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
      default:
        return <About></About>;
    }
  }
  return (
    <div className="App">
      <Header
        navItems={navItems}
        setCurrentNavItem={setCurrentNavItem}
        currentNavItem={currentNavItem}
      ></Header>
      <main>{displayComponent(currentNavItem.name)}</main>
      <Footer></Footer>
    </div>
  );
}
export default App;