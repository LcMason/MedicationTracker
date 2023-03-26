import React, { createContext, useState, useEffect } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({trackers:[], medications:[]});
    const [loggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/me")
        .then((resp => resp.json()))
        .then(user => {
          if(!user.errors) {
            login(user)
          }
        })
    }, []);

  const login = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const logout = () => {
    setUser({});
    setLoggedIn(false);
  };

  const signup = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  const handleAddUserMeds = (medication) => {
    setUser({...user, medications: [...user.medications, medication]})
  }

  const handleDeleteUserMed = (id) => {
    const deleteMed = user.medications.filter(medication => medication.id !== id)
    setUser({...user, medications: deleteMed})
  }

  const handleEditUserMed = (editMed) => {
    const editMeds = user.medications.map((medication) => (medication.id === editMed.id ? editMed : medication))
    console.log(editMed,"handle edit user in User Context")
    setUser({...user, medications: editMeds})
  }

  const handleAddUserTracker = (tracker) => {
    setUser({...user, trackers: [...user.trackers, tracker]})

  }

  const handleDeleteUserTracker = (id) => {
    const deleteTracker = user.trackers.filter(tracker => tracker.id !== id)
      setUser({...user, trackers: deleteTracker})
  }

  return (
    
      <UserContext.Provider value={{user, login, loggedIn, logout, signup, errors, setErrors, handleAddUserMeds, handleAddUserTracker, handleDeleteUserTracker, handleDeleteUserMed, handleEditUserMed }}>
        {children}
      </UserContext.Provider>
    
  )
}

export { UserContext, UserProvider }