import { useState } from 'react';
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  FormControl,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

const FormsPage = () => {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [address, setAddress] = useState('');

  //   const requiredValidation = () => {};

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <main>
      <Container>
        {email}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* Email and Password */}
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={e => {
                setEmail(e.target.value);
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide your Email-Id.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide your Password.
            </Form.Control.Feedback>
          </Form.Group>
          {/* First Name, Last Name and Address */}
          <Form.Group controlId="formBasic">
            <Row>
              <Col>
                <Form.Control placeholder="First name" required />
                <Form.Control.Feedback type="invalid">
                  Please provide your First Name.
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" required />
            <Form.Control.Feedback type="invalid">
              Please provide your First Name.
            </Form.Control.Feedback>
          </Form.Group>
          {/* Country Code, PhoneNumber and TermandConditions */}
          <Dropdown.Divider />

          <Form.Group className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Country Code"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">+91 (India)</Dropdown.Item>
              <Dropdown.Item href="#">+1 (US)</Dropdown.Item>
              <Dropdown.Item href="#">+93 (Afganisthan)</Dropdown.Item>
              <Dropdown.Item href="#">+355 (Albania)</Dropdown.Item>
              <Dropdown.Divider />
            </DropdownButton>
            <FormControl type="number" placeholder="Phone Number" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" required>
            <Form.Check type="checkbox" label="acceptTermsAndCondition" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default FormsPage;
