import React, { useState } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
 
import './App.css';
 
const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);
 
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Sample show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap Demo</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Sample>
    </>
  );
};
 
const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Demonstration Of React Bootstrap</h1>
      <BarCodeScanner>
       
      </BarCodeScanner>
    </Jumbotron>
  </Container>
);
 
export default App;
export default App;
