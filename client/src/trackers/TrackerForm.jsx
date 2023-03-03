import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { MedicationContext } from '../context/MedicationContext'
import { TrackerContext } from '../context/TrackerContext'
import { UserContext } from '../context/UserContext'

const TrackerForm = () => {
  const [review, setReview] = useState("")
  const [frequency, setFrequency] = useState("")
  const [quantity, setQuantity] = useState("")
  const [medication_id, setMedicationId] = useState("");
  const { user } = useContext(UserContext)
  const { addTracker } = useContext(TrackerContext)
  const { medications } = useContext(MedicationContext)
  const navigate = useNavigate()
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if(medications.length > 0) {
      setMedicationId(medications[0].id) 
    }
  }, [medications]) 


  function handleSubmit(e) {
    e.preventDefault();
    addTracker({review, medication_id })

    const newTracker = {
      review,
      frequency,
      quantity
    }

    fetch(`/users/${user.id}/trackers`, {
    method: "POST", 
      headers: {
      "Accept": "application/json",
      "Content-Type": "application/json" },
        body: JSON.stringify(newTracker)
    }).then((res) => { 
      if (res.ok) {
        console.log(res)
        res.json().then(tracker => {
          console.log(tracker)
          addTracker(tracker)
          navigate(`/users/${user.id}/trackers`)
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

  const listMeds = medications.map((med) =>
  <option value={med.id} key={med.id}>{med.name}</option>
  
  )
  console.log(listMeds)
    return (
      <div className="container-flex">
      <div className="row justify-content-center">
      <div className="col-lg-6">
        <br></br>
      <div>
          <label htmlFor="medication_id"> Select Medication: </label>
        <select name="medList" id="medication_id" onChange={e => setMedicationId(e.target.value)}>{listMeds}</select>
        </div> 
        <br></br>
        <br></br>
        <h3>Tracking Your Health</h3>
        <form className="form my-5 justify-content-center text-center bg-dark border-dark p-3" onSubmit={handleSubmit}>
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
            </form>
            {/* place image after form  */}
            {/* place footer  */}
          </div>
        </div>
      </div>
  
  )
};

export default TrackerForm