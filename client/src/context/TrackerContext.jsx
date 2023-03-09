import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";



const TrackerContext = createContext();

const TrackerProvider = ({ children }) => {
    const [trackers, setTrackers] = useState([]);
    const [reviews, setReviews ] = useState([]);
    const { user } = useContext(UserContext)
    const navigate = useNavigate()




    useEffect(() => {
        fetch('/trackers')                         
        .then(resp => resp.json())
        .then(tracker => setTrackers(tracker))
    }, [])

    const addTracker = (tracker) => {
        setTrackers([...trackers, tracker])
               
      }

      const updateReview = review => {
        const copyOfReviews = [...reviews];
        const r = reviews.find(r => r.id === review.id);
        const rIndex = reviews.indexOf(r);
        copyOfReviews.splice(rIndex, 1, review);
        setReviews(copyOfReviews);
    }

       const editReview = (review, id) => {
        fetch(`/users/${user.id}/trackers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(review), 
    })
        .then((resp) => resp.json())
        .then(review => {
            updateReview(review);
            navigate(`/users/${id}/trackers`)
        })
      
       }

    return (






      
        <TrackerContext.Provider value={{trackers, addTracker}}>
        {children}
      </TrackerContext.Provider>
    )
}

export { TrackerContext, TrackerProvider }

