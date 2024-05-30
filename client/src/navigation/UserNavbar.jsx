import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const UserNavbar = () => {
const { logout, user } = useContext(UserContext) 

const handleLogout = () => {
  fetch('/logout',
  { method: 'DELETE'})
  .then(() => {logout()})
}

  const greeting = user ? `Welcome, ${user.username}` : '';
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <Link className="navbar-brand fw-bold text-dark" to="/">
            <i className="bi bi-unity text-dark"></i> Medication Tracker
    </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
          {user && <span className="navbar-text text-light">{greeting}</span>}
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link text-light fw-bolder" aria-current="page" to={`/users/${user.id}/dashboard`}>Dashboard</Link>
            </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to={`/users/${user.id}/medications`}>Medications</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to={`/users/${user.id}/medications/new`}>Create Medication</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to={`/users/${user.id}/trackers`}>Trackers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" aria-current="page" to={`/users/${user.id}/trackers/new`}>Create Tracker</Link>
          </li>
          <li>
            <Link className="nav-link active" to="/login" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
          {/* {user && <span className="navbar-text text-light">{greeting}</span>} */}
      </div>
      </div>
   </nav> 
  )
} 
export default UserNavbar