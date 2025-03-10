import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser, abcFn } = useContext(UserContext);

  const handleSubmit = (e) => {
    setUser({ username, password });
    if(username && password){
        abcFn();
    }
  };

  return (
    <div className="row">
      <div className="col-12 col-lg-4 offset-lg-4 border rounded p-3">
        <h3 className="mb-3">Login Form</h3>
        <input
          type="text"
          value={username}
          className="form-control mb-2"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          value={password}
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit} className="btn-primary rounded btn-lg">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
