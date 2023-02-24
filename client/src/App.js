import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Navbar from './navigation/Navbar';
import UserForm from './users/UserForm';
import UserList from './users/UserList';
import Home from './components/Home';
import About from './components/About'
// import UserEdit from './users/UserEdit';
import MedicationList from './medications/MedicationList';
import TrackerForm from './trackers/TrackerForm';
import TrackerList from './trackers/TrackerList';
import Login from './components/Login';
import Signup from './components/Signup';
import { MedicationProvider } from './context/MedicationContext';
import { TrackerProvider } from './context/TrackerContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
  <div className="container-fluid">
    <UserProvider>  
      <MedicationProvider>
        <TrackerProvider>
          <Navbar />
          <Home/>
            <Routes>  
              <Route path="/" element={<About />} /> 
              <Route path="/login" element={<Login />} /> 
              <Route path="/signup" element={<Signup />} />  
              <Route path="/medications" element={<MedicationList />} />
              <Route path="/trackers" element={<TrackerList />} /> 
              <Route path="/trackers/new" element={<TrackerForm />} /> 
              <Route path="/users/new" element={<UserForm />} />
              <Route path="/users" element={<UserList />} />
            </Routes> 
        </TrackerProvider>
      </MedicationProvider>
    </UserProvider> 
  </div>
   
  );
}

export default App;
