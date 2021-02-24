import React from 'react'
import "./Validator.css"
export default function Validator({state, setstate}) {
    function handleInputsl(e){
        setstate(prevState => ({...prevState, ...{[e.target.name] : e.target.value}}))
    }
    function handleSubmit(){
        console.log("before ", state);
        console.log(state.password === state.passwordConfirm);
        let tempState = {...state, valid: false}
        if (state.password !== state.passwordConfirm) {
            setstate(tempState)
        }
        console.log("after ", state);
    }
    let validText = !state.valid && "Passwords do not match"
    return (
        <div>
            <div className="form">
            <h1>Sign Up</h1>
            <input onChange={(e) => handleInputsl(e)} type="email" name="email" placeholder="email" />
            <input onChange={(e) => handleInputsl(e)} type="password" name="password" placeholder="password" />
            <input onChange={(e) => handleInputsl(e)} type="password" name="passwordConfirm" placeholder="confirm password" />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {validText}
            </div>
        </div>
        </div>
    )
}