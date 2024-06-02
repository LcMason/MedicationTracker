import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, setErrors, errors } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/login", {
      method: "POST", 
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then(user => {
          login(user);
          if (user.role === 'user') {
            navigate(`/users/${user.id}/dashboard`) 
          }
          else if (user.role === 'admin') {
            navigate(`/admin/dashboard`)
          }
        })
      }
      else {
        res.json().then((res) => {
          setErrors(res.error[0])
        })  
      }
    })
  }

  useEffect(() => {
    return () => {
      setErrors([])
    }
  },[setErrors])

    return (
    <div className="container-flex">
      <div className="row justify-content-center">
      <div className="col-lg-6">
        <form className="form my-5 justify-content-center text-center bg-dark border-dark p-3" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Username</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Username"
                aria-label="Username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Password</span>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                aria-label="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold"> Login
          </button> 
          <div className="text-light fw-bolder">{errors}</div>
        </form>
      </div>
      </div>
    </div>
  )
};

export default Login;