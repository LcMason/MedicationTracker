import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";


const TrackerContext = createContext(null);

const TrackerProvider = ({ children }) => {
    const [trackers, setTrackers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetch('/trackers')                          // should the route be trackers or reviews
        .then(resp => resp.json())
        .then(trackers => setTrackers(trackers))
    }, [])

}

export { TrackerContext, TrackerProvider }

