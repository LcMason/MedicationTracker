import { Routes, Route } from 'react-router-dom'
import Navbar from './navigation/Navbar';
import UserForm from './users/UserForm';
import UserList from './users/UserList';
import UserEdit from './users/UserEdit';
import TrackerForm from './trackers/TrackerForm';
import TrackerList from './trackers/TrackerList';
import Login from './components/Login';
import SignUp from './components/Signup';

import MedicationEdit from './medications/MedicationEdit';
import MedicationForm from './medications/MedicationForm';
import MedicationList from './medications/MedicationList';
import { MedicationProvider } from './context/MedicationContext';
import { TrackerProvider } from './context/TrackerContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div>
      <Navbar />
      {/* <UserProvider> */}
      {/* <Login /> */}

       {/* <MedicationProvider> */}
        {/* <TrackerProvider> */}
            {/* <UserProvider>  */}
              {/* <Routes>  
                {/* <Route path="/home" element={<Home />} />  */}
                {/* <Route path="/login" element={<Login />} />  */}
                {/* <Route path="/signup" element={<Signup />} />  */}
                {/* <Route path="/medications/:id/edit" element={<MedicationEdit />} />  */}
                {/* <Route path="/medications" element={<MedicationList />} />  */}
                {/* <Route path="/medications/new" element={<MedicationForm />} />  */}
                {/* <Route path="/trackers" element={<TrackerList />} />  */}
                {/* <Route path="/trackers/new" element={<TrackerForm />} />  */}
                {/* <Route path="/users/new" element={<UserForm />} /> */}
                {/* <Route path="/users" element={<UserList />} /> */}
                 
            {/* </Routes> */} 
            <UserProvider>
            <Login />
          </UserProvider>
        {/* </TrackerProvider>  */}
      {/* </MedicationProvider>  */}
    </div>
  );
}

export default App;
