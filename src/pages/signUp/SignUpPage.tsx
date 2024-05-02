import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom"

function SignUpPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="userName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter a UserName" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </Form.Group>

            <Form.Group as={Col} controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={SignUp}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );

  function SignUp() {
    const asyncSignUp = async () => {
      const url = 'http://localhost:5000/signup';

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, userName: userName, password: password })
      }
      console.log(options)
      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);
        //navigate('/')
      } catch (error) {
        console.error(error);
      }
    }
    asyncSignUp();
  }
}

export default SignUpPage;