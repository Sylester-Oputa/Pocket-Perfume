import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Loginup.css";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

const Signupform = () => {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (pin !== confirmPin) {
      setError("Pins do not match");
      setSuccess("");
    } else {
      setError("");
      setSuccess("Account created successfully!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Type your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="pin">Password</label>
            <input
              type="password"
              id="pin"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Type your password"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPin">Confirm Password</label>
            <input
              type="password"
              id="confirmPin"
              value={confirmPin}
              onChange={(e) => setConfirmPin(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="login-button">SIGN UP</button>
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </form>
        <div className="social-login">
          <p>Or Sign Up Using</p>
          <div className="social-icon">
            <Link className="large-icon"><GoogleIcon /></Link>
            <Link className="large-icon"><AppleIcon /></Link>
            <Link className="large-icon"><FacebookIcon /></Link>
          </div>
        </div>
        <p className="signup-link">
          Already have an account? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    </div>
  );
};

export default Signupform;