import React from "react";
import "./SignUp.css";

const LoginForm = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>
    <div id="login-form">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Firstname:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="username">Lastname:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="username">Email:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="number">Phone Number:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="text" id="text" name="Phone Number" />

        <label htmlFor="password"> Conform Password:</label>
        <input type="text" id="text" name="Phone Number" />
        
        <input type="submit" value="Sign Up" />
      </form>
    </div>
    </>
  );
};

export default LoginForm;
