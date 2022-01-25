// import './FormPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import StepOne from './forms/StepOne';
import StepTwo from './forms/StepTwo';
import Final from './forms/Final';
import StepThree from './forms/StepThree';

function FormPage() {
  // state for steps
  const [step, setstep] = useState(1);

  // state for form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    country_code: '',
    phone_number: '',
    acceptTermsAndCondition: false,
  });
  const [countryCode, setCountryCode] = useState('');
  const [acceptTermsAndCondition, setAcceptTermsAndCondition] = useState(false);

  const SetTheCountryCode = e => {
    setCountryCode(e);
    formData.country_code = e;
    setFormData(formData);
  };

  const setTheAcceptTermsAndCondition = () => {
    // console.log(...(formData.acceptTermsAndCondition = acceptTermsAndCondition));
    const vatac = !acceptTermsAndCondition;
    setAcceptTermsAndCondition(vatac);
    formData.acceptTermsAndCondition = vatac;

    //   setFormData(...formData)
  };

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const { value } = e.target;

    // updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value,
    }));
  };

  useEffect(() => {
    console.log(formData);
  }, []);

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="FormPage">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="FormPage">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 3:
      return (
        <div className="FormPage">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepThree
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                  countryCode={countryCode}
                  SetTheCountryCode={SetTheCountryCode}
                  acceptTermsAndCondition={acceptTermsAndCondition}
                  setTheAcceptTermsAndCondition={setTheAcceptTermsAndCondition}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 4:
      return (
        <div className="FormPage">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return <div className="FormPage" />;
  }
}

export default FormPage;
