import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');
  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <Container className="w-100">
      <Row className="flex-row contact-page">
        <Col sm={8} className="contact-form">
          <Row className="w-100">
            <Form className="w-100" onSubmit={handleSubmit}>
              <Form.Row className="w-100">
                <Form.Group className="w-100" controlId="formGridName">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={name}
                    onBlur={handleChange}
                    name="name"
                  />
                </Form.Group>
                <Form.Group className="w-100" controlId="formGridEmail">
                  <Form.Label htmlFor="name">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    defaultValue={email}
                    onBlur={handleChange}
                    name="email"
                  />
                </Form.Group>
                <Form.Group className="w-100" controlId="formGridMessage">
                  <Form.Label htmlFor="name">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    defaultValue={message}
                    onBlur={handleChange}
                  />
                </Form.Group>
                <Button className="w-100" type="submit">
                  Send message
                </Button>
              </Form.Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </Container>
    // {errorMessage && (
    //   <div>
    //     <p className="error-text">{errorMessage}</p>
    //   </div>
    // )}
  );
}
export default ContactForm;




// {/* <Form>
// <Form.Group controlId="form.Name">
//   <Form.Label>Name</Form.Label>
//   <Form.Control type="name" />
// </Form.Group>

// <Form.Group controlId="form.Email">
//   <Form.Label>Email</Form.Label>
//   <Form.Control type="email" />
//   <Form.Text className="text-muted">
//     * we'll never share your email with anyone else.
// </Form.Text>
// </Form.Group>

// <Form.Group controlId="form.Text">
//   <Form.Label>Message</Form.Label>
//   <Form.Control as="textarea" placeholder="Enter your message here" rows='5' />
// </Form.Group>

// <Button type="submit">
//   Submit
// </Button>
// </Form> */}