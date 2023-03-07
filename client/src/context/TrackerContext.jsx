import { useEffect, useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";


const TrackerContext = createContext();

const TrackerProvider = ({ children }) => {
    const [trackers, setTrackers] = useState([]);


    useEffect(() => {
        fetch('/trackers')                         
        .then(resp => resp.json())
        .then(tracker => setTrackers(tracker))
    }, [])

    const addTracker = (tracker) => {
        setTrackers([...trackers, tracker])
               
      }

      const handleDeleteTracker = (id) => {
        const deleteTracker = trackers.filter(tracker => tracker.id !== id)
        setTrackers(deleteTracker)
      }

    return (
        <TrackerContext.Provider value={{trackers, addTracker, handleDeleteTracker}}>
        {children}
      </TrackerContext.Provider>
    )
}



export { TrackerContext, TrackerProvider }

