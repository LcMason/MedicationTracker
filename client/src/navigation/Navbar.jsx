import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary bg-success">
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/home">Navbar</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/login">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signup">Signup</Link>
//         </li>
//         <li className="nav-item dropdown">
//           <Link className="nav-link dropdown-toggle" to="/home" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </Link>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/medications">List Medications</Link></li>
//             <li><Link className="dropdown-item" to="/trackers">Tracker List</Link></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><Link className="dropdown-item" to="/trackers/new">Create New Review</Link></li>
//           </ul>
//         </li>
//         {/* <li className="nav-item">
//           <Link className="nav-link disabled">Disabled</Link>
//         </li> */}
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search Medication" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>

  // )
  // }


// export default Navbar;

    <nav className="navbar navbar-expand-lg bg-dark">

      <div className="container-fluid">
        <ul>
          
          <li><Link to="/medications">List Medications</Link></li>
          <li><Link to="/medications/new">Create Medication</Link></li>
          <li><Link to="/trackers">Tracker List</Link></li>
          <li><Link to="/trackers/new">Create New Review</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/trackers/new">Create New Review</Link></li>
          <li><Link to="/signup">Signup</Link></li>
             <li><Link to="/">Home</Link></li>
          <li><Link to="/users/me"></Link></li>
        </ul>
      </div>
   </nav> 
  )
    } 

export default Navbar



