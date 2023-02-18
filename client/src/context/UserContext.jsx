import React, { createContext, useState, useEffect } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/me")
        .then((resp => resp.json()))
        .then(data => {
          console.log(data)
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
  return (
    
      <UserContext.Provider value={{user, login, loggedIn, logout, signup, errors, setErrors }}>
        {children}
      </UserContext.Provider>
    
  )
}



export { UserContext, UserProvider }