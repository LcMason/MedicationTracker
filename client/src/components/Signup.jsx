import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [race, setRace] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const { signup, setErrors, errors } = useContext(UserContext);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // const userFormData = {
    //   name,
    //   username,
    //   password,
    //   password_confirmation: passwordConfirmation,
    //   age,
    //   gender,
    //   race,
    // };

    const userFormData = new FormData();
    userFormData.append("name", name);
    userFormData.append("username", username);
    userFormData.append("password", password);
    userFormData.append("password_confirmation", passwordConfirmation);
    userFormData.append("age", age);
    userFormData.append("gender", gender);
    userFormData.append("race", race);
    userFormData.append("profile_picture", profilePicture); 


    fetch("/signup", {
      method: "POST",
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"},
      body: JSON.stringify(userFormData),
    })
      .then((res) => res.json())
      .then((user) => {
        if (!user.errors) {
          signup(user);
          navigate("/"); // TODO: Navigate to Dashboard
        } else {
          const errorLis = user.errors.map((e, index) => <li key={index}>{e}</li>);
          setErrors(errorLis);
        }
      });
  };

  useEffect(() => {
    return ()=> {
      setErrors([])
    }
  },[setErrors])
  
  return (
    <div className="container-flex">
      <div className="row justify-content-center">
      <div className="col-lg-6">
        <form className="my-5 justify-content-center text-center bg-dark border-dark p-3" onSubmit={handleSubmit}>

            <div className="form-group">
              <div className="mb-3 input-group">
                <span className="input-group-text">Name</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="namr"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>



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
            <span className="input-group-text">Enter Password</span>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Password Confirmation</span>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password Confirmation"
                aria-label="password_confirmation"
                id="password-confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3 input-group">
              <span className="input-group-text">Name</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                aria-label="namr"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

            <div className="form-group">
              <div className="mb-3 input-group">
                <label htmlFor="gender" className="input-group-text">Gender</label>
                <select
                  id="gender"
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="mb-3 input-group">
                <label htmlFor="race" className="input-group-text">Race</label>
                <select
                  id="race"
                  className="form-control"
                  value={race}
                  onChange={(e) => setRace(e.target.value)}
                >
                  <option value="">Select Race</option>
                  <option value="White">White</option>
                  <option value="African American/Black">African American/Black</option>
                  <option value="Hispanic">Hispanic</option>
                  <option value="Asian">Asian</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Korean">Korean</option>
                  <option value="Other">Other</option>
                  {/* Add more race options as needed */}
                </select>
              </div>
            </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Age</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Age"
                aria-label="Age"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
        </div>
            <div className="form-group">
              <div className="mb-3 input-group">
                <label htmlFor="profile-picture" className="input-group-text">Profile Picture</label>
                <input
                  type="file"
                  id="profile-picture"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => setProfilePicture(e.target.files[0])}
                />
              </div>
            </div>
            <button type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold">
              Sign Up
            </button>
            <div className="text-light">{errors}</div>

        </form>
      </div>
      </div>
    </div>
  );
};
export default SignUp;