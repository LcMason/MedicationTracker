import React, {useContext} from 'react'
// import { TrackerContext } from '../context/TrackerContext'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import pills from "../images/pills.jpg"


const TrackerList = () => {
  const { user, handleDeleteUserTracker } = useContext(UserContext)

const handleDeleteClick = (id) => {
  fetch(`/users/${user.id}/trackers/${id}`, {
    method: "DELETE", 
    }).then(() => {
      handleDeleteUserTracker(id)
    })
}
console.log(user, "tracker list")
  return (
    <div>    
      <h4 className="py-2">Tracking My Health </h4>   
     {user.trackers.map((tracker) => <div key={tracker.id} className="col bg-dark">
          <img
            src={pills}
            className="card-img-top img-fluid img-thumbnail"
            alt="medication-card"
          />
          <div className="card-body" key={tracker.id} >
         
            <p className="card-text text-light fw-bold">Medication : {tracker.medication?.name}</p>
            <p className="card-text text-light fw-bold">Review : {tracker.review}</p>
            <p className="card-text text-light fw-bold">Frequency : {tracker.frequency}</p>
            <p className="card-text text-light fw-bold">Quantity : {tracker.quantity}</p>
            <div className="pb-2">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
            </div>
            <div>
            <Link
              className="btn btn-sm text-light"
              aria-current="page"
              to="#"
              onClick= {() => {handleDeleteClick(tracker.id)}}
            >
              Delete
            </Link>
            </div>
          </div>
        </div>
         )} 
      </div> 
     
  )
}

export default TrackerList