import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Loginup.css";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';


const account1 = {
  username: 'admin',
  pin: 1111,
};

const account2 = {
  username: 'John',
  pin: 1234,
};

const account3 = {
  username: 'Sylvester',
  pin: 1123,
};

const account4 = {
  username: 'Adam',
  pin: 1112,
};

const account5 = {
  username: 'Elvis',
  pin: 1113,
};

const accounts = [account1, account2, account3, account4, account5];

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const matchingAccount = accounts.find(
      (account) => account.username === username && account.pin === Number(pin)
    );
    if (matchingAccount) {
      setError("You are successfully logged in.");
    } else {
      setError("Incorrect username or pin.");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Type your username"
            />
          </div>
          <div className="input-group">
            <label htmlFor="pin">Password</label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(event) => setPin(event.target.value)}
              placeholder="Type your password"
            />
          </div>
          <div className="forgot-password">
            <Link to="/static">Forgot password?</Link>
          </div>
          <Link to="/home"><button type="submit" className="login-button">LOGIN</button></Link>
          {error && <div className="error">{error}</div>}
        </form>
        <div className="social-login">
          <p>Or Sign Up Using</p>
          <div className="social-icon">
            <Link to="/static" className="large-icon"><GoogleIcon /></Link>
            <Link to="/static" className="large-icon"><AppleIcon /></Link>
            <Link to="/static" className="large-icon"><FacebookIcon /></Link>
          </div>
        </div>
        <p className="signup-link">
          Or Sign Up Using <Link to="/signup"> SIGN UP</Link>
        </p>
      </div>
    </div>
  );
};

export default Loginform;