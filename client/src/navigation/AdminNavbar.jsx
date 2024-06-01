import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-dark" to="/admin/dashboard">
                    <i className="bi bi-unity text-dark"></i> Admin Dashboard
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    {/* <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light fw-bolder" to="/admin/trackers">Trackers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light fw-bolder" to="/admin/medications">Medications</Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    );
};

export default AdminNavbar;
