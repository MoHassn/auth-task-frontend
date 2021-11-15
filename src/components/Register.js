import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <main class="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 class="h3 mb-3 fw-normal">Please Register</h1>

        <div class="form-floating">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
        <p>
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </main>
  );
};

export default Register;
