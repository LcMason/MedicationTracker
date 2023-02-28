import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MedicationContext} from '../context/MedicationContext'
import { UserContext } from "../context/UserContext";

const MedicationForm = () => {

  const [name, setName] = useState("")
  const [form, setForm] = useState("")
  const [errors, setErrors] = useState([]);
  const [instruction, setInstruction] = useState("")
  const [rating, setRating] = useState("")
  const { addMed } = useContext(MedicationContext)
  const { user } = useContext(UserContext)

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/medications", {
      method: "POST", 
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        form,
        instruction,
        rating
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then(medication => {
          addMed(medication)
          navigate(`/users/${user.id}/medications`)
          //navigate to users page
        })
      }
      else {
        res.json().then((errorData) => {
          setErrors(errorData.errors);
        })  
        // const errorLis = medicaion.errors.map(e, ind) => <li key={ind}>{e}</li>     
        // res.json().then((res) => {
          
        //   setErrors(res.error[0])
        }
      // }
    // })
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
          <span className="input-group-text">Name</span>
            <input
              type="text"
              className="form-control"
              placeholder="Medication"
              aria-label="Username"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="mb-3 input-group">
          <span className="input-group-text">Form</span>
            <input
              type="text"
              className="form-control"
              placeholder="Form"
              aria-label="Password"
              id="password"
              value={form}
              onChange={(e) => setForm(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="mb-3 input-group">
          <span className="input-group-text">Instruction</span>
            <input
              type="text"
              className="form-control"
              placeholder="Instructions"
              aria-label="Password"
              id="password"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            />
          </div>
        </div><div className="form-group">
          <div className="mb-3 input-group">
          <span className="input-group-text">Rating</span>
            <input
              type="text"
              className="form-control"
              placeholder="Rating"
              aria-label="Password"
              id="password"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold"> Add Medication
        </button> 
        <div className="text-dark fw-bolder">{errors}</div>
      </form>
    </div>
    </div>
  </div>
  )
};

export default MedicationForm