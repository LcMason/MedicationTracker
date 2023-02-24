import React, { createContext, useState, useEffect } from "react";

const MedicationContext =  createContext();

const MedicationProvider = ({ children }) => {
  const [medications, setMedications] = useState([]);
 
    useEffect(() => {
      const fetchMedications = () => {
        fetch('/medications')
        .then((resp) => resp.json())
        .then((data) => setMedications(data))
      }
      fetchMedications()
    }, [])

    console.log("I'm in the Medication Context")

  return (
      <MedicationContext.Provider value={ {medications} }>
        {children}
      </MedicationContext.Provider>
  )
}

export { MedicationContext, MedicationProvider }