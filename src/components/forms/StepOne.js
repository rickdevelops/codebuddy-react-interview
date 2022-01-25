import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
// import validator from 'validator';

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  // creating error state for validation
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // after form submit validating the form data using validator
  const passwordValidator = passwordValue => {
    const exp = new RegExp(/(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%]){2})/);
    return exp.test(passwordValue);
  };

  const submitFormData = e => {
    e.preventDefault();
    if (!values.email) {
      setError(true);
    }

    if (passwordValidator(values.password)) {
      setPasswordError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                type="email"
                defaultValue={values.email}
                placeholder="email"
                onChange={handleFormData('email')}
                required
              />
              {error ? (
                <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ border: passwordError || error ? '2px solid red' : '' }}
                type="text"
                defaultValue={values.password}
                placeholder="Password"
                onChange={handleFormData('password')}
                required
              />
              {passwordError || error ? (
                <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;
