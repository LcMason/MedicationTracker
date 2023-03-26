import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { TrackerContext } from '../context/TrackerContext'
import { UserContext } from '../context/UserContext'

const TrackerForm = () => {
  const [review, setReview] = useState("")
  const [frequency, setFrequency] = useState("")
  const [quantity, setQuantity] = useState("")
  const [medication_id, setMedicationId] = useState("");
  const { user, handleAddUserTracker } = useContext(UserContext)
  const { addTracker } = useContext(TrackerContext)

  const navigate = useNavigate()
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if(user.medications.length > 0) {
      setMedicationId(user.medications[0].id) 
    }
  }, [user.medications]) 


  function handleSubmit(e) {
    e.preventDefault();
   

    const newTracker = {
      review,
      frequency,
      quantity,
      medication_id
    }

    fetch(`/trackers`, {
    method: "POST", 
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json" },
        body: JSON.stringify(newTracker)
    }).then((res) => { 
      if (res.ok) {
        res.json().then(tracker => {
          addTracker(tracker)
          handleAddUserTracker(tracker)
          navigate(`/users/${user.id}/medications`)
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

  const listMeds = user.medications.map((med) =>
  <option value={med.id} key={med.id}>{med.name}</option>
  
  )
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
          <span className="input-group-text" > Select Medication </span>
          <select  id="medication_id" className="form-control" defaultValue={medication_id} onChange={(e) => setMedicationId(e.target.value)}>{listMeds}</select>
        </div>
        </div> 
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Review</span>
              <input
                type="text"
                className="form-control"
                placeholder="Review"
                aria-label="Review"
                id="username"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Frequency</span>
              <input
                type="text"
                className="form-control"
                placeholder="Frequency"
                aria-label="Frequency"
                id="frequency"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="mb-3 input-group">
            <span className="input-group-text">Quantity</span>
              <input
                type="text"
                className="form-control"
                placeholder="Quantity"
                aria-label="Quantity"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            </div>
            <button type="submit" className="btn bg-warning p-2 btn-outline-primary fw-bold"> Add Tracker
        </button> 
            <div className="text-light">
              {errors}
            </div>
            </form>
          </div>
        </div>
      </div>
  
  )
};

export default TrackerForm