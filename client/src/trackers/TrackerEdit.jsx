import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { TrackerContext } from '../context/TrackerContext'
import { UserContext } from '../context/UserContext'

const TrackerEdit = () => {
  const { user, handleEditUserTracker } = useContext(UserContext)
  const { trackers } = useContext(TrackerContext)
  const [review, setReview] = setState("")
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    editReview({
      id, 
      review, 
     
    })
  }
 
const listMeds = trackers.map((tracker) => 
   <option value={tracker.id} key={tracker.id}>{tracker.title}</option>
);



  return (
    <div>
      <h3>Edit Form</h3>
      <form onSubmit={handleSubmit}
    </div>
  )
}

export default TrackerEdit