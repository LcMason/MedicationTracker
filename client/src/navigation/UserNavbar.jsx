import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const UserNavbar = () => {
const { logout } = useContext(UserContext) 

const handleLogout = () => {
  fetch('/logout',
  { method: 'DELETE'})
  .then(() => {logout()})
}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <Link className="navbar-brand fw-bold text-dark" to="/home">
            <i className="bi bi-unity text-dark"></i> Medication Tracker
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to="/medications">Medications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to="/medications/new">Create Medication</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to="/trackers">Trackers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to="/trackers/new">Create Reviews</Link>
          </li>
          <li>
            <Link className="nav-link active" to="/logout" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
      </div>
   </nav> 
  )
} 
export default UserNavbar