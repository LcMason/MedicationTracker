// import React, {useState, useEffect, useContext} from 'react'
// import { useNavigate } from 'react-router-dom'
// import { MedicationContext } from '../context/MedicationContext'
// import { UserContext } from '../context/UserContext'

// const TrackerEdit = () => {
//   const [reviews, setReviews] = useState("")
//   const [frequency, setFrequency] = useState("")
//   const [quantity, setQuantity] = useState("")

//   const { user } = useContext(UserContext)
//   const navigate = useNavigate()

//   function handleSubmit(e) {
//     e.preventDefault();

//     const newTracker = {
//       review,
//       frequency,
//       quantity
//     }

//     fetch(`/users/${user.id}/trackers`, {
//     method: "PATCH", 
//       headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json" },
//         body: JSON.stringify(newTracker)
//     }).then((res) => { 
//       if (res.ok) {
//         console.log(res)
//         res.json().then(medication => {
//           console.log(medication)
//           addMed(medication)
//           navigate(`/users/${user.id}/medications`)
//         })
//       }
//       else {
//         res.json().then((errorData) => {
//           const errorLis = errorData.errors.map((e, ind) => <li key={ind}>{e}</li>)
//           setErrors(errorLis);
//         })  
//         }
//   })
// }


//   return (
//     <div>TrackerEdit</div>
//   )
// }

// export default TrackerEdit