import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add your logic for handling sign-in
    if (!email || !password) {
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

    // If all validations pass, you can proceed with sign-in logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const isValidEmail = (email) => {
    // Very basic email validation, you might want to use a more robust approach
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className='login-signup'>
      <div className='loginsignup-container'>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div  className='signin'>
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
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Sign In</button>
      </form>
      </div>
    </div>
    
  );
}





export default LoginForm;