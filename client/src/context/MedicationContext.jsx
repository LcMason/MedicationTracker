import { useEffect, useState, createContext } from "react";

const MedicationContext =  createContext();


const MedicationProvider = ({ children }) => {
    const [medications, setMedications] = useState([]);


    useEffect(() => {
      fetch('/medications')
      .then(resp => resp.json())
      .then((medications) => setMedications(medications))
    }, [])

  return (

      <MedicationContext.Provider value={ medications }>
              {children}
            </MedicationContext.Provider>
  )

}



export { MedicationContext, MedicationProvider }