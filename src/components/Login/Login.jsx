import React from "react";

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Log In to the System</h1>
        <div>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Login;