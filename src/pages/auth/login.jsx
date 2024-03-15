import React, { useState } from "react";
import NWButton from "../../component/NWButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const loginUrl = "http://localhost:8000/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const payload = {
      email: email.value,
      password: password.value,
    };

    const response = await fetch(loginUrl, {
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
      dispatch({
        type: "LOGIN",
        payload: {
          isLoggedIn: true,
        },
      });
      localStorage.setItem("news_token", resJson.data.token);
      nav("/admin/dashboard");
    }

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
        <h4>Login with your existing credentials</h4>
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
