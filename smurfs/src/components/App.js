import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';
import "./App.css";

import SmurfVillage from './SmurfVillage';
import SmurfForm from './SmurfForm';

export const smurfContext = createContext();

const App = () => {
  const [smurf, setSmurf] = useState([]);
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: ""
  });

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

  const addSmurf = newbie => {
    const newbieSmurf = {
      name: newbie.name,
      age: newbie.age,
      height: newbie.height,
      id: Date.now()
    };
    setSmurf([...smurf, newbieSmurf])
  };

  const handleChanges = e => {
    setNewSmurf({...newSmurf, [e.target.name]: e.target.value})
  };


  const handleSubmit = e => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        console.log("response", response.data);
        e.preventDefault();
        addSmurf(newSmurf);
        setNewSmurf({name: "", age: "", height: ""});
      })
      .catch(error => {
        console.log("error", error);
      })
  };
  
  return (
    <div className="App">
      <h1>SMURF VILLAGE</h1>
        
      <smurfContext.Provider value={{smurf, addSmurf, newSmurf, handleChanges, handleSubmit}}>
        <SmurfForm />
        <SmurfVillage />
      </smurfContext.Provider>
    </div>
  );
};

export default App;
