import React, {useState} from 'react'
// import { render } from '@testing-library/react';

const PersonCard = () => {

    const [allPeople, setAllPeople] = useState([]);
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const[confirmPassword, setConfirmPassword] = useState ("");

    const addPerson = e => {
        e.preventDefault();
        const[...currentPeople] = allPeople;
        currentPeople.push({firstName, lastName, email, password, confirmPassword});
        setAllPeople(currentPeople);
        resetForm();
    }

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const Results = props =>{
        const { firstName, lastName, email, password, confirmPassword } = props.data;
    }

    return (
        
        <div>
            {
            allPeople.map((people,i) =>
            <li key = {i}>
            <div>
                <h2>People</h2>
                <p>First Name:{ people.firstName }</p>  
                <p>Last Name: { people.lastName }</p>
                <p>Email: { people.email }</p>
                <p>Password: { people.password }</p>
                <p>Confirm Password: { people.confirmPassword }</p>
            </div> 
            

            </li>
            )
            }
            
            <form onSubmit = { addPerson }>
                <label htmlFor=""> First Name:  </label>
                <input type="text" onChange = { e => setFirstName(e.target.value)} value = {firstName}/>
                <br/>

                <label htmlFor=""> Last Name:  </label>
                <input type="text" onChange = { e => setLastName(e.target.value)} value = {lastName}/>
                <br/>

                <label htmlFor=""> Email:  </label>
                <input type="text" onChange = { e => setEmail(e.target.value)} value = {email}/>
                <br/>

                <label htmlFor=""> Password:  </label>
                <input type="password" onChange = { e => setPassword(e.target.value)} value = {password}/>
                <br/>

                <label htmlFor=""> Confirm Password:  </label>
                <input type="password" onChange = { e => setConfirmPassword(e.target.value)} value = {confirmPassword}/>
                <br/>
                <button>Add a Person!</button>
            </form>
        </div>
    );
}

export default PersonCard;
