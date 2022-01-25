// import React from 'react';
// import { Card } from 'react-bootstrap';

import { useEffect } from 'react';

const Final = ({ values }) => {
  // destructuring the object from values
  console.log(values);
  const {
    firstName,
    lastName,
    password,
    email,
    address,
    countryCode,
    phoneNumber,
    acceptTermsAndCondition,
  } = values;

  const submitData = async () => {
    const result = await fetch('https://codebuddy.review/submit', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: values,
    })
      .then(res => {
        console.log(res);
        if (res.status !== 200) {
          throw Error('could not fetch from the resource');
        }

        return res.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    console.log(result);
  };

  useEffect(() => {
    submitData();
  }, []);

  return (
    <>
      {firstName}, {lastName}, {password}, {email}, {address}, {countryCode}, {phoneNumber},
      {acceptTermsAndCondition},
    </>
  );
};

export default Final;
