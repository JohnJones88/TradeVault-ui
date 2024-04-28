import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TradeVaultSignUp() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="userName">
          <Form.Label>userName</Form.Label>
          <Form.Control type="text" placeholder="Enter a UserName" />
        </Form.Group>

        <Form.Group as={Col} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TradeVaultSignUp;