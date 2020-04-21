import React from 'react';

const Smurf = (props) => {
    console.log("Smurf props", props);
    return (
        <div className="smurf">
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h3>{props.height}</h3>
        </div>
    )
};

export default Smurf;