import React, { createContext, useState, useEffect } from 'react'

const UserContext = createContext(null)

const UserProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loggedIn, setLoggedIn] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        fetch("/me")
        .then((resp => resp.json()))

    }, []);


  return (
    <div>

    </div>
  )
}



export { UserContext, UserProvider }