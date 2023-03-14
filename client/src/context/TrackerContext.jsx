import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const TrackerContext = createContext();

const TrackerProvider = ({ children }) => {
    const [trackers, setTrackers] = useState([]);
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

      const updateTracker = tracker => {
        const copyOfTrackers = [...trackers];
        const t = trackers.find(t => t.id === tracker.id);
        const tIndex = trackers.indexOf(t);
        copyOfTrackers.splice(tIndex, 1, tracker);
        setTrackers(copyOfTrackers);
    }

       const handleEditUserTracker = (review, id) => {
        fetch(`/users/${user.id}/trackers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(review), 
    })
        .then((resp) => resp.json())
        .then(review => {
            updateTracker(review);
            navigate(`/users/${user.id}/trackers`)
        })
      
       }

    return (
        <TrackerContext.Provider value={{trackers, addTracker, handleEditUserTracker}}>
        {children}
      </TrackerContext.Provider>
    )
}

export { TrackerContext, TrackerProvider }

