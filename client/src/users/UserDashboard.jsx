import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
// import PieChart from './PieChart';

const UserDashboard = () => {
    const { user, login } = useContext(UserContext);
    const navigate = useNavigate();
    console.log("logged in user", user)
    useEffect(() => {
        if (!login) {
            navigate(`/`);
        } else if (login && user.admin)
            navigate(`admin/dashboard`)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login]);

    return (
        <div>
            {/* TODO Render the PieChart component within the Dashboard */}
            {/* <PieChart chartData={user.chartData} /> */}
            {/* TODO place a hyperlink on the website to take users to webMD. */}
            {login && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ marginRight: '10px' }}>Welcome, {user.name}</h2>
                    <p style={{ marginRight: '10px' }}>Age: {user.age}</p>
                    <p style={{ marginRight: '10px' }}>Gender: {user.gender}</p>
                    <p style={{ marginRight: '10px' }}>Race: {user.race}</p>
               
                  

                </div>
            )}
        </div>
    );
};

export default UserDashboard;


