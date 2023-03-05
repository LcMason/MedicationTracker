import React, {useContext} from 'react'
import { TrackerContext } from '../context/TrackerContext'
import pills from "../images/pills.jpg"

const TrackerList = () => {
  const { trackers } = useContext(TrackerContext)

  return (
    <div>    
      <h4 className="py-2">Tracking My Health </h4>   
     {trackers.map((tracker) => <div key={tracker.id} className="col bg-dark">
          <img
            src={pills}
            className="card-img-top img-fluid img-thumbnail"
            alt="medication-card"
          />
          <div className="card-body" >
         
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
          </div>
        </div>
         )} 
      </div> 
     
  )
}

export default TrackerList