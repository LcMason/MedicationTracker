import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Navbar from './navigation/Navbar';
// import UserForm from './users/UserForm';
// import UserList from './users/UserList';
import Home from './components/Home';
// import UserEdit from './users/UserEdit';
import TrackerForm from './trackers/TrackerForm';
import TrackerList from './trackers/TrackerList';
import Login from './components/Login';
import Signup from './components/Signup';
import { MedicationProvider } from './context/MedicationContext';
import { TrackerProvider } from './context/TrackerContext';
import { UserProvider } from './context/UserContext';
import MedicationForm from './medications/MedicationForm';
import EditMedicationForm from './medications/EditMedicationForm';
import UserMedication from './users/UserMedication';

function App() {
  return (
  <div className="container-fluid">
    <UserProvider>  
      <MedicationProvider>
        <TrackerProvider>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/login" element={<Login />} /> 
              <Route path="/signup" element={<Signup />} />  
              <Route path="/users/:id/medications" element={<UserMedication />} />
              <Route path="/users/:id/medications/new" element={<MedicationForm />} />
              <Route path="/users/:id/medications/:id/edit" element={<EditMedicationForm />} /> 
              <Route path="/users/:id/trackers" element={<TrackerList />} /> 
              <Route path="/users/:id/trackers/new" element={<TrackerForm />} /> 
             
            </Routes> 
        </TrackerProvider>
      </MedicationProvider>
    </UserProvider> 
  </div>
   
  );
}

export default App;
