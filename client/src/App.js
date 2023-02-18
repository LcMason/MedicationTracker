import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navigation/Navbar';


import UserForm from './users/UserForm';
import UserList from './users/UserList';
import UserEdit from './users/UserEdit';




import TrackerEdit from './trackers/TrackerEdit';
import TrackerForm from './trackers/TrackerForm';
import TrackerList from './trackers/TrackerList';


import MedicationEdit from './medications/MedicationEdit';
import MedicationForm from './medications/MedicationForm';
import MedicationList from './medications/MedicationList';
import { MedicationProvider } from './context/MedicationContext';
import { TrackerProvider } from './context/TrackerContext';
import { UserProvider } from './context/UserContext';



// import Home from './components/static/Home';






function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
      </Routes>

      <MedicationProvider>
        <TrackerProvider>
            <UserProvider>
              <Routes>
                <Route path="/medications/:id/edit" element={<MedicationEdit />} /> 
                <Route path="/medications" element={<MedicationList />} /> 
                <Route path="/medications/new" element={<MedicationForm />} /> 
              
            
                <Route path="/trackers" element={<TrackerList />} /> 
                <Route path="/trackers/new" element={<TrackerForm />} /> 
                {/* <Route path="/trackers/:id/edit" element={<TrackerEdit />} />  */}

                <Route path="/users/new" element={<UserForm />} />
                <Route path="/users" element={<UserList />} />

         
              </Routes>
          </UserProvider>
        </TrackerProvider>
      </MedicationProvider>
    </Router>
     
   
  );
}

export default App;
