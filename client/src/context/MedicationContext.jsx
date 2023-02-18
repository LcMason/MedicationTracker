import { useEffect, useState, createContext } from "react";
// import { baseUrl, headers } from "../Globals";
import { useNavigate } from "react-router-dom";

const MedicationContext =  createContext(null);


const MedicationProvider = ({ children }) => {
    const [medications, setMedications] = useState([]);

    // const navigate = useNavigate();



  return (
    <div></div>
  )
}

export { MedicationContext, MedicationProvider }