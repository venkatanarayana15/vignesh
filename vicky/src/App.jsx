import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/user', { name, password });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    console.log("Submitted:", name, password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          placeholder='Name' 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <br />
        <label>Password:</label>
        <input 
          type="password" 
          placeholder='Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default App;
