import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MedicationContext =  createContext();

const MedicationProvider = ({ children }) => {
  const [medications, setMedications] = useState([]);
 
  const navigate = useNavigate()
    useEffect(() => {
        fetch('/medications')
        .then((resp) => resp.json())
        .then((medications) => setMedications(medications))
    }, [])

    const addMed = medication => {
      fetch('/medication/new', {
          method: "POST",
          headers: {
            "Accept": "application/json",
          "Content-Type": "application/json" },
            body: JSON.stringify({medication})
          }
          .then(resp => resp.json())
          .then(medication => {
              setMedications([...medications, medication])
              navigate('/medications')
          })
      )
      

 
    }
  return (
      <MedicationContext.Provider value={{ medications, addMed }}>
        {children}
      </MedicationContext.Provider>
  )
}

export { MedicationContext, MedicationProvider }