import React, {useEffect, useState} from 'react';
import Ships from "./components/Ships";

const App = () => {
    const [launchingShips, setLaunchingShips] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(response => response.filter(item => item.launch_year !== '2020'))
            .then(response => setLaunchingShips(response));
    }, [])

    return (
        <div>
            <Ships data={launchingShips}/>
        </div>
    );
};

export default App;


