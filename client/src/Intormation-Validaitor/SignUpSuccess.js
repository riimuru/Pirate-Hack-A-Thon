import React from 'react';
import values from './signUpForm'
import '../components/styles/Register.css';

const SignUpSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You have successfully created an account.<br/> <a className="success" href='signin'>Click here to login</a></h1>
      {/* <img className='form-img-2' src='img/img-3.svg' alt='success-image' /> */}
    </div>
  );
};

export default SignUpSuccess;