import React, { useState } from 'react';
import "./RegisterForm.css"

import { Link } from 'react-router-dom';

function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you can add your logic for handling registration
      if (!email || !password || !confirmPassword) {
        setErrorMessage('Please fill in all fields.');
        return;
      }
  
      if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
  
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long.');
        return;
      }
  
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }
  
      // If all validations pass, you can proceed with registration logic
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
    };
  
    const isValidEmail = (email) => {
      // Very basic email validation, you might want to use a more robust approach
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
  
    return (
      <div className='register'>
      <div className='register-container'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='signin'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='signin'>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className='signin'>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Register</button>
          <p className="register-login">Already have an account? <Link to='/LoginForm'><span>Login</span></Link></p>
        </form>
      </div>
      </div>
    );
  }
  export default RegisterForm;