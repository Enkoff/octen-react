import React, {useEffect, useState} from 'react';
import ShipsList from "./components/ShipsList";

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
            <ShipsList data={launchingShips}/>
        </div>
    );
};

export default App;


