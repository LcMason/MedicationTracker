import React, { createContext, useState, useEffect } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({trackers:[]});
    const [loggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/me")
        .then((resp => resp.json()))
        .then(user => {
          login(user)
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

  const handleEditUserMed = (newMed) => {
    setUser({...user, medications: [...user.medications, newMed]})
  }

  const handleEditUserTracker = (newReview) => {
    setUser({...user, trackers: [...user.trackers, newReview]})
  }

  const handleAddUserTracker = (tracker) => {
    setUser({...user, trackers: [...user.trackers, tracker]})

  }
  //deleting from nested property 
  const handleDeleteUserTracker = (id) => {
    const deleteTracker = user.trackers.filter(tracker => tracker.id !== id)
      setUser({...user, trackers: deleteTracker})
  }

  return (
    
      <UserContext.Provider value={{user, login, loggedIn, logout, signup, errors, setErrors, handleAddUserMeds, handleEditUserTracker, handleAddUserTracker, handleDeleteUserTracker, handleDeleteUserMed, handleEditUserMed }}>
        {children}
      </UserContext.Provider>
    
  )
}

export { UserContext, UserProvider }