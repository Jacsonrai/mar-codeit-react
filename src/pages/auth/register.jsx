import React, { useState } from "react";
import NWButton from "../../component/NWButton";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const singUpUrl = "http://localhost:8000/auth/register";
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const payload = {
      email: email.value,
      password: password.value,
    };
    const response = await fetch(singUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const resJson = await response.json();
    if (resJson.status === 404) {
      setErrorMessage(resJson.message);
    }
    if (resJson.status === 200) {
      setSuccessMessage(resJson.message);
      setTimeout(() => {
        nav("/login");
      }, 3000);
    }
    setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, [3000]);
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
        <h4>Register your new account</h4>
        {errorMessage && (
          <p
            style={{
              color: "red",
            }}
          >
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p
            style={{
              color: "green",
            }}
          >
            {successMessage}
          </p>
        )}
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
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
          <NWButton type="submit">Sign Up</NWButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
