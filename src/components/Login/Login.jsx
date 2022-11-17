import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="form">
        <h2>Login Here</h2>
        <input type="email" name="email" placeholder="Enter Email Here" />
        <input type="password" name="" placeholder="Enter Password Here" />
        <button class="btnn">
          <a href="/">Login</a>
        </button>
        <p class="link">
          Don't have an account
          <br />
          <a href="/">Sign up</a>
          <span>here</span>
        </p>
      </div>
      <div>
      </div>
      <div className="button-1">
      <button>Doctor</button>
        <button>Patient</button>
      </div>
      <div className="button-2">
        <button>Nurse</button> 
        <button>DEO</button>
      </div>
      </div>
  );
};

export default Login;
