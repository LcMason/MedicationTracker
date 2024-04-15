import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import PieChart from './PieChart';

const Dashboard = () => {
    const { user, login } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(user)
    useEffect(() => {
        if (!login) {
            navigate(`/`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [login]);

    return (
        <div>
            <h1>User Dashboard</h1>
            {/* Render the PieChart component within the Dashboard */}
            <PieChart chartData={user.chartData} />
        </div>
    );
};

export default Dashboard;


