import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from './UserNavbar'
import { UserContext } from '../context/UserContext'
import AdminDashboard from '../components/admin/AdminDashboard'

const Navbar = () => {
const { user, loggedIn } = useContext(UserContext) 

  if (!loggedIn) {
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
            <Link className="nav-link text-light fw-bolder" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light fw-bolder" to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
} else if (user.role === 'admin') {
    return <AdminDashboard />
  }
  else if (user.role === 'user') {
    return <UserNavbar />  
  } 
  else {
    return null
  } 
}


export default Navbar