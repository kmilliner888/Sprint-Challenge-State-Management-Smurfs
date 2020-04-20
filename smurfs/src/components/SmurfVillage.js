import React, { useContext } from 'react';
import { smurfContext } from './App';
import Smurf from './Smurf';

const SmurfVillage = () => {
    const {smurf} = useContext(smurfContext);
    console.log("SmurfVillage smurf", smurf);
    return (
        <div>
            <h1>Welcome!</h1>
            <div className="smurf-group">
                {smurf.map(smurf => (
                    <Smurf
                        key={smurf.id}
                        smurf={smurf}
                    />
                ))}
            </div>


        </div>
    )
};

export default SmurfVillage;