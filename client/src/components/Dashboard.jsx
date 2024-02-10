// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types'; // Import PropTypes for prop validation

// const Dashboard = ({ isAuthenticated, pieChart }) => { // Accept pieChart as a prop
//     // Redirect user to home page if not authenticated
//     if (!isAuthenticated) {
//         return <Redirect to="/" />;
//     }

//     // Render dashboard content if user is authenticated
//     return (
//         <div>
//             <h1>User Dashboard</h1>
//             {/* Render the pieChart component */}
//             {pieChart}
//         </div>
//     );
// }

// Dashboard.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     pieChart: PropTypes.element.isRequired, // Validate the pieChart prop as an element
// };

// export default Dashboard;











import React, { useContext, useState } from 'react'
import { UserContext } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import PieChart from './PieChart';
import Chart from '../components/Chart';





const Dashboard = ({ PieChart}) => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { login } = useContext(UserContext)
    const navigate = useNavigate();

    // const authenticateUser = () => {
    //     // Your authentication logic here (e.g., check user session, token, etc.)
    //     setIsAuthenticated(true);
    // }

    if (!login) {
        navigate(`/`) 
        }

    return (
        <div>
            {/* ... your existing dashboard content ... */}
            <h1>This is my Dashboard</h1>
            {/* <PieChart chartData={chartData} /> */}
            {/* Display the chart component within the dashboard */}
            {/* <Chart /> TODO: chart not rendering */}
        </div>
    );
};



export default Dashboard;

