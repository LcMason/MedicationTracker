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

    const handleEditMed = (editMed) => {
      const editMeds = medications.map((medication) => (medication.id === editMed.id ? editMed : medication))
      setMedications(editMeds)
    }
    
  return (
      <MedicationContext.Provider value={{ medications, addMed, handleEditMed }}>
        {children}
      </MedicationContext.Provider>
  )
}

export { MedicationContext, MedicationProvider }