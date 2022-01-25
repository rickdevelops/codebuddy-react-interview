import { useState } from 'react';
import { Form, Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';
// import validator from 'validator';

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({
  nextStep,
  handleFormData,
  prevStep,
  values,
  countryCode,
  SetTheCountryCode,
  setTheAcceptTermsAndCondition,
}) => {
  // creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = e => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to next step
    // if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
    if (
      values.phone_number.length < 2 &&
      values.phone_number.length > 10 &&
      values.acceptTermsAndCondition === false
    ) {
      console.log(values);
      setError(true);
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
              <DropdownButton
                onSelect={evt => {
                  SetTheCountryCode(evt);
                }}
                className="mb-3"
                variant="outline-secondary"
                title="Country Code"
                defaultValue={countryCode}
                id="input-group-dropdown-1"
              >
                <Dropdown.Item eventKey="91 " href="#">
                  +91 (India)
                </Dropdown.Item>
                <Dropdown.Item eventKey="1" href="#">
                  +1 (US)
                </Dropdown.Item>
                <Dropdown.Item eventKey="93 " href="#">
                  +93 (Afganisthan)
                </Dropdown.Item>
                <Dropdown.Item eventKey="355" href="#">
                  +355 (Albania)
                </Dropdown.Item>
                <Dropdown.Divider />
              </DropdownButton>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                defaultValue={values.phone_number}
                onChange={handleFormData('phone_number')}
              />
              {error ? (
                <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
              ) : (
                ''
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="acceptTermsAndCondition"
                defaultValue={values.acceptTermsAndCondition}
                onChange={setTheAcceptTermsAndCondition}
              />
            </Form.Group>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepThree;
