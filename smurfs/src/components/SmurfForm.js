import React, { useContext } from 'react';
import { smurfContext } from './App';

const SmurfForm = () => {
    const {newSmurf, handleChanges, handleSubmit} = useContext(smurfContext);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newSmurf.name}
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={newSmurf.age}
                    onChange={handleChanges}
                />
                <input 
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={newSmurf.height}
                    onChange={handleChanges}
                />
                <button type="submit">Add Smurf</button>
                {/* <button onClick={clearForm}>Clear</button> */}
            </form>
        </div>
    )
};

export default SmurfForm;