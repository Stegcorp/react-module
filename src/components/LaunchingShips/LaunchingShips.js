import React, {useEffect, useState} from 'react';
import {spacexService} from "../../service";
import LaunchingShip from "../LaunchingShip/LaunchingShip";

const LaunchingShips = () => {
    const [ships, setShips] = useState([])
    useEffect(() => {
        spacexService.allUrl.then(value => setShips(value))
    }, [])
    return (
        <div>
            {
                ships.map(ship=> <LaunchingShip key={ship.flight_number} ship={ship}  />)
            }
        </div>
    );
};

export default LaunchingShips;