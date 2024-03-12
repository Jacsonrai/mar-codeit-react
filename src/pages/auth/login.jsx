import React, { useState } from "react";
import NWButton from "../../component/NWButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (email.value === "admin@gmail.com" && password.value === "password") {
      nav("/dashboard");
    }

    setErrorMessage("password or email doesn't match");
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div
          style={{
            marginTop: "1rem",
          }}
        >
          <NWButton type="submit">Login</NWButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
