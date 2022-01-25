import { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
// import validator from 'validator';

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  // creating error state for validation
  const [error, setError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = e => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    // if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
    if (values.firstName.length < 2 && values.firstName.length >= 50) {
      setError(true);
      // return;
    } else if (values.address.length < 10) {
      setAddressError(true);
    } else {
      nextStep();
    }
  };

  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData('firstName')}
                required
              />
              {error ? (
                <Form.Text style={{ color: 'red' }}>
                  This is a required field. Size should be between 2 to 50
                </Form.Text>
              ) : (
                ''
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData('lastName')}
              />
              {error ? (
                <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                style={{ border: error ? '2px solid red' : '' }}
                name="address"
                defaultValue={values.address}
                type="text"
                placeholder="Address"
                onChange={handleFormData('address')}
                required
              />
              {addressError || error ? (
                <Form.Text style={{ color: 'red' }}>
                  This is a required field. Must be Greater than 10 Characters
                </Form.Text>
              ) : (
                ''
              )}
            </Form.Group>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Continue
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;
