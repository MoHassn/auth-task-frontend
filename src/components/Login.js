import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        let parsedData = data;
        if (typeof data === "string") {
          parsedData = JSON.parse(data);
        }
        console.log(parsedData);
        if (parsedData.code === 200) {
          localStorage.setItem("token", parsedData.token);
          setIsLoggedIn(true);
          history.push("/");
        } else {
          setError(parsedData.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please Login</h1>
        <div style={{ color: "red" }}> {error}</div>

        <div className="form-floating">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <p>
          Don't Have an Account? <Link to="/register">Register</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
