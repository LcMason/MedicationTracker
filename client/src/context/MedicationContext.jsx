// import { useEffect, useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";

// const MedicationContext =  createContext(null);


// const MedicationProvider = ({ children }) => {
//     const [medications, setMedications] = useState([]);

//     // const navigate = useNavigate();

//     useEffect(() => {
//       fetch('/medications')
//       .then(resp => resp.json())
//       .then((medications) => setMedications(medications))
//     }, [])

//   return (
//     <div></div>
//   )
// }

// <MedicationContext.Provider value={{ }}>
//         {children}
//       </MedicationContext.Provider>


// export { MedicationContext, MedicationProvider }