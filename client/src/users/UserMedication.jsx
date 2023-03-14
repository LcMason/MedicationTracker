import React, {useContext} from 'react'
import { UserContext } from '../context/UserContext'
import pills from '../images/pills.jpg'
import { Link } from 'react-router-dom'

const UserMedication = () => {

const { user,  handleDeleteUserMed } = useContext(UserContext)

const handleDeleteClick = (id) => {
  fetch(`/users/${user.id}/medications/${id}`, {
    method: "DELETE", 
    }).then(() => {
      handleDeleteUserMed(id)
    })
}

  return (
    <div className="col bg-dark text-light"> 
    {user.medications.map((medication) => (
      <div key={medication.id}><img
        src={pills}
        className="card-img-top img-fluid img-thumbnail"
        alt="medication-card"
      />
      <div className="card-body">
        <h3 className="card-title text-light fw-bolder">{medication.name}</h3>
        <p className="card-text text-light fw-bold">Form : {medication.form}</p>
        <p className="card-text text-light fw-bold">Instruction : {medication.instruction}</p>
        <p className="card-text text-light fw-bold">Rating : {medication.rating}</p>
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
     to={`/users/${user.id}/medications/${medication.id}/edit`}
     >
     Edit
     </Link> 
        <Link
              className="btn btn-sm text-light"
              aria-current="page"
              to={`/users/${user.id}/medications`}
              onClick= {() => {handleDeleteClick(medication.id)}}
            >
              Delete
            </Link>
      </div>
      </div>
      ))}
    </div>
  )
}

export default UserMedication