import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/medications">List Medications</Link></li>
      <li><Link to="/medications/new">Create Medication</Link></li>
      <li><Link to="/trackers">Tracker List</Link></li>
      <li><Link to="/trackers/new">Create New Review</Link></li>

      <li><Link to="/trackers/new">Create New Review</Link></li>
      <li><Link to="/users">Signup</Link></li>
      <li><Link to="/users/me">L</Link></li>
      
    </ul>

  )
}

export default Navbar