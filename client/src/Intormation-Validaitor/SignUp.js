import React, { useState } from 'react';
import '../components/styles/Register.css';
import Register from '../components/signup/Register.js';
import SignUpSuccess from './SignUpSuccess';
import logo from '../assets/logo.png'

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function signUp() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <a className='close-btn' href='register'>×</a>
        <div className='form-content-left'>
          <img className='form-img' src={logo} alt='pirate' />
        </div>
        {!isSubmitted ? (
          <Register signUp={signUp} />
        ) : (
          <SignUpSuccess/>
        )}
      </div>
    </>
  );
};

export default SignUp;