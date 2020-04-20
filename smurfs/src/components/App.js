import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import "./App.css";

import SmurfVillage from './SmurfVillage';

export const smurfContext = createContext();

const App = () => {
  const [smurf, setSmurf] = useState([]);
  const [newSmurf, setNewSmurf] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      // console.log("response", response)
      setSmurf(response.data)
    })
    .catch(error => {
      console.log("error", error);
    });
  }, []);
  

  // const addSmurf = item => {
  //   setSmurf(item)
  // };

  const handleChanges = e => {
    setNewSmurf({...smurf, [e.target.name]:e.target.value})
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSmurf({newSmurf});
  }

  const clearForm = e => {
    e.preventDefault();
    setNewSmurf("");
  };
  
  
  return (
    <div className="App">
      <h1>SMURF VILLAGE</h1>
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
        </form>
      </div>
      <smurfContext.Provider value={{smurf}}>
        <SmurfVillage />
      </smurfContext.Provider>
    </div>
  );
};

export default App;
