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

    return (
        <TrackerContext.Provider value={trackers}>
        {children}
      </TrackerContext.Provider>
    )
}



export { TrackerContext, TrackerProvider }

