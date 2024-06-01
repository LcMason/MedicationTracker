import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
// import PieChart from './PieChart';

const AdminDashboard = () => {
    const { user, loggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    console.log("logged in user", user)
    useEffect(() => {
        if (!loggedIn) {
            navigate(`/`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn]);

    return loggedIn && user.role === 'admin' ? (
        <div>
            {/* TODO Render the PieChart component within the Dashboard */}
            {/* <PieChart chartData={user.chartData} /> */}
            {/* TODO place a hyperlink on the website to take users to webMD. */}
            {/* {loggedIn && ( */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <h2 style={{ marginRight: '10px' }}>Welcome, {user.name}</h2> */}
                    <h2>Welcome to the Admin Dashboard, {user.name}</h2>
                    <p style={{ marginRight: '10px' }}>Age: {user.age}</p>
                    <p style={{ marginRight: '10px' }}>Gender: {user.gender}</p>
                    <p style={{ marginRight: '10px' }}>Race: {user.race}</p>
                    <p>Admin Dashboard</p>
                </div>
            {/* )} */}
        </div>
    ) : null;
};

export default AdminDashboard