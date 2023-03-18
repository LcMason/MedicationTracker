import React, {useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MedicationContext } from '../context/MedicationContext'
import { UserContext } from '../context/UserContext'


const EditMedicationForm = () => {
    const { id } = useParams()
    const { user, handleEditUserMed } = useContext(UserContext)
    const {handleEditMed} = useContext(MedicationContext)
    
    const navigate = useNavigate()
   
    const updateRating = user.medications.find((medication) => medication.id === parseInt(id) )
    
    const [rating, setRating] = useState(updateRating.rating)
    const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
   

    const editMed = {
      rating
    }

    fetch(`/users/${user.id}/medications/${updateRating.id}`, {
    method: "PATCH", 
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json" },
        body: JSON.stringify(editMed)
    }).then((res) => { 
      if (res.ok) {
        res.json().then(medication => {
        handleEditMed(medication)
          handleEditUserMed(medication)
        console.log("I am in EditMedicationForm!", medication)
          navigate(`/users/${user.id}/medications/${medication.id}`)
        })
      }
      else {
        res.json().then((errorData) => {
          const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
          setErrors(errorLis);
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
      
        <h3>Tracking Your Health</h3>
        <form className="form my-5 justify-content-center text-center bg-dark border-dark p-3" onSubmit={handleSubmit}>
        <div className="form-group">
            <div className="mb-3 input-group">
          <span className="input-group-text" > Medication</span>
          <span className="input-group-text" > {updateRating.name}</span>
        </div>
        </div> 
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Form</span>
            <span className="input-group-text">{updateRating.form}</span>
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Instruction</span>
            <span className="input-group-text">{updateRating.instruction}</span>
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Rating</span>
              <input
                type="text"
                className="form-control"
                aria-label="Rating"
                id="rating"
                defaultValue={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            </div>
            <button type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold"> Submit
        </button> 
            <div className="text-light">
              {errors}
            </div>
            </form>
          </div>
        </div>
      </div>
)}

export default EditMedicationForm