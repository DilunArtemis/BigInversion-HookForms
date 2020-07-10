import React, {useState} from 'react';
import './App.css';
import PersonCard from './components/PersonCard.js';

function App() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    return (
    <div className="App">
        
        <PersonCard inputs = {state} setInputs = {setState}/>

    </div>
);
}

export default App;
