import React from 'react';

const Smurf = (props) => {
    console.log("Smurf props", props);
    return (
        <div className="smurf">
            <div className="smurf-name">
                <h2>{props.name}</h2>
            </div>
            <div>
                <h3>Age: {props.age}</h3>
                <h3>Height: {props.height}</h3>
            </div>
        </div>
    )
};

export default Smurf;