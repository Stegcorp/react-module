import React from 'react';

import './LaunchingShip.css'

const LaunchingShip = ({ship}) => {
  if (ship.launch_year<2020)
    return (
        <div >
            <div> name - {ship.mission_name}</div>
            <div> year - {ship.launch_year}</div>
            <img className={'w150'} src={ship.links.mission_patch_small} alt={ship.mission_name} />
            <hr/>
        </div>

    );
};

export default LaunchingShip;