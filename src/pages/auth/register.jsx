import React from "react";
import NWButton from "../../component/NWButton";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
      }}
    >
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
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
