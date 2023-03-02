import React, {useContext} from 'react'
import { MedicationContext } from '../context/MedicationContext'
import MedCard from '../medications/MedCard'


const MedicationList = () => {
  const {medications} = useContext(MedicationContext)
  const medList = medications.map(medication => <MedCard key={medication.id} medication={medication} />)
  
  return (
    <div>{medList}</div>
  )
// const {medications} = useContext(MedicationContext)
// const medicationCards = medications.map(medication => <MedicationCard key={medication.id} medication={medication} />)
  
//     return (
//     <div className="container">
//       <div className="row">
//         {medicationCards}
//       </div>
//     </div>
//     )
  }

  export default MedicationList


  //style the list. See line 18.