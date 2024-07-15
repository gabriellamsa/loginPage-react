import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userName || !password) {
      alert('All fields are required!');
    } else {
      alert(`Email: ${userName}\nPassword: ${password}`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Log In to the System</h1>
        <div className="input-field">
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email" 
            onChange={(e) => setUserName(e.target.value)} 
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href='#'>Forgot your password?</a>
        </div>

        <button type="submit">Log In</button>
        <div className="signup-link">
          <p>
            Don't have an account? <a href='#'>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
