import React, { useContext } from 'react'
import { MedicationContext } from '../context/MedicationContext'
import { TrackerContext } from '../context/TrackerContext'
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import pills from '../images/pills.jpg'




const UserMedDetail = () => {
  const { id } = useParams()
  const { medications } = useContext(MedicationContext)
  const { trackers } = useContext(TrackerContext)
  const { user, /*handleDeleteUserMed*/ } = useContext(UserContext)


  const getMed = medications.find(medication => medication.id === parseInt(id))
  const getTracker = trackers.find(tracker => tracker.medication.id === parseInt(id))

  // const handleDeleteClick = (id) => {
  //     fetch(`/users/${user.id}/medications/${id}`, {
  //       method: "DELETE", 
  //       }).then(() => {
  //         handleDeleteUserMed(id)
  //       })
  //   }

  return (
    <div className="col bg-dark text-light">
      {getMed && (
        <div key={getMed.id}><img
          src={pills}
          className="card-img-top img-fluid img-thumbnail"
          alt="medication-card"
        />
          <div className="card-body">
            <h3 className="card-title text-light fw-bolder">{getMed.name}</h3>
            <p className="card-text text-light fw-bold">Form : {getMed.form}</p>
            <p className="card-text text-light fw-bold">Instruction : {getMed.instruction}</p>
            {getTracker && (
              <p className="card-text text-light fw-bold">Comments : {getTracker.comment}</p>
            )}
            <p className="card-text text-light fw-bold">Rating : {getMed.rating}</p>
            <div className="pb-2">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
            </div>
            <Link
              className="btn btn-sm btn-dark py-2"
              aria-current="page"
              to={`/users/${user.id}/medications/${getMed.id}/edit`}
            >
              Edit
            </Link>
            {/* <Link
              className="btn btn-sm text-light"
              aria-current="page"
              to={`/users/${user.id}/medications`}
              onClick= {() => {handleDeleteClick(getMed.id)}}
            >
              Delete
            </Link> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMedDetail