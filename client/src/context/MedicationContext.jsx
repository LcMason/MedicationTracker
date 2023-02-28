import React, { createContext, useState, useEffect } from "react";

const MedicationContext =  createContext();

const MedicationProvider = ({ children }) => {
  const [medications, setMedications] = useState([]);
 

    useEffect(() => {
        fetch('/medications')
        .then((resp) => resp.json())
        .then((medications) => setMedications(medications))
    }, [])

    const addMed = (medication) => {
      setMedications([...medications, medication])
             
    }
      
      

 
  
  return (
      <MedicationContext.Provider value={{ medications, addMed }}>
        {children}
      </MedicationContext.Provider>
  )
}

export { MedicationContext, MedicationProvider }