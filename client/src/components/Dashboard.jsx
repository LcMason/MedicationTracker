import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
// import PieChart from './PieChart';

const Dashboard = () => {
    const { user, login } = useContext(UserContext);
    const navigate = useNavigate();
    console.log("logged in user", user)
    useEffect(() => {
        if (!login) {
            navigate(`/`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login]);

    return (
        <div>
            {/* Render the PieChart component within the Dashboard */}
            {/* <PieChart chartData={user.chartData} /> */}
            {login && (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ marginRight: '10px' }}>Welcome, {user.name}</h2>
                    <p style={{ marginRight: '10px' }}>Age: {user.age}</p>
                    <p style={{ marginRight: '10px' }}>Gender: {user.gender}</p>
                    <p>Race: {user.race}</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;


