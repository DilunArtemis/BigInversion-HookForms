import React, {useState} from 'react'
// import { render } from '@testing-library/react';

const PersonCard = () => {

    const [allPeople, setAllPeople] = useState([]);
    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const[confirmPassword, setConfirmPassword] = useState ("");

    const [submitted, setSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState("Your name cannot be blank.");
    const [lastNameError, setLastNameError] = useState("This cannot be blank.");
    const [emailError, setEmailError] = useState("This cannot be blank.");
    const [passwordError, setPasswordError] = useState("You need a password!");
    const[confirmPasswordError, setConfirmPasswordError] = useState("You must confirm your password!")


    const addPerson = e => {
        e.preventDefault();
        setSubmitted(true);
            if(firstNameError !== "" || lastNameError !== "" || emailError !== "" || passwordError !== "" || confirmPasswordError !== ""){
                return;
            }

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

    const firstNameHandler = e => {
        const newFirstName = e.target.value;
        setFirstName(newFirstName);

        if(newFirstName.length === 0){
            setFirstNameError("Your name cannot be blank.");
        }
        else if(newFirstName.length < 2){
            setFirstNameError("First Name must be longer than 2 characters.");
        }
        else{
            setFirstNameError("");
        }
    }
        

    const lastNameHandler = e => {
        const newLastName = e.target.value;
        setLastName(newLastName);

        if(newLastName.length === 0){
            setLastNameError("Your name cannot be blank.");
        }
        else if(newLastName.length < 2){
            setLastNameError("First Name must be longer than 2 characters.");
        }
        else{
            setLastNameError("");
        }
    }

    const emailHandler = e => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if(newEmail.length === 0){
            setEmailError("Your email cannot be blank.");
        }
        else if(newEmail.length < 5){
            setEmailError("First Name must be longer than 5 characters.");
        }
        else{
            setEmailError("");
        }
    }

    const passwordHandler = e => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if(newPassword.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }
        else{
            setPasswordError("");
        }
    }

    const confirmPasswordHandler = e =>{
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        if(newConfirmPassword != password){
            setConfirmPasswordError("Must match your password!")
        }
        else{
            setConfirmPasswordError("");
        }
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
                {
                submitted && firstNameError ?
                <p>{ firstNameError }</p>
                :
                ''
                }
                <label htmlFor=""> First Name:  </label>
                <input type="text" onChange = { e => firstNameHandler(e)} value = {firstName}/>
                <br/>
                {
                submitted && lastNameError ?
                <p>{ lastNameError }</p>
                :
                ''
                }

                <label htmlFor=""> Last Name:  </label>
                <input type="text" onChange = { e => lastNameHandler(e)} value = {lastName}/>
                <br/>
                {
                submitted && emailError ?
                <p>{ emailError }</p>
                :
                ''
                }

                <label htmlFor=""> Email:  </label>
                <input type="text" onChange = { e => emailHandler(e)} value = {email}/>
                <br/>
                {
                submitted && passwordError ?
                <p>{ passwordError }</p>
                :
                ''
                }

                <label htmlFor=""> Password:  </label>
                <input type="text" onChange = { e => passwordHandler(e)} value = {password}/>
                <br/>
                {
                submitted && confirmPasswordError ?
                <p>{ confirmPasswordError }</p>
                :
                ''
                }

                <label htmlFor=""> Confirm Password:  </label>
                <input type="text" onChange = { e => confirmPasswordHandler(e)} value = {confirmPassword}/>
                <br/>
                {
                submitted && confirmPasswordError ?
                <p>{ confirmPasswordError }</p>
                :
                ''
                }
                <button>Add a Person!</button>
            </form>
        </div>
    );
}


export default PersonCard;
