import React, { useState } from "react"

function CreateAccount(){

    const [email, setEmail]=useState('');
    const [password, setPassword]=  useState('');
    const [firstname, setFirstName]=useState('');
    const [lastname, setLastName]=  useState('');
    const [address, setAddress]=  useState('');
    const [phone, setPhone]=  useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor ="firstname">First Name</label>
                <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type = "text" placeholder="first name" id ="firstname" name="firstname"></input>
                
                <label htmlFor ="lastname">Last Name</label>
                <input value={lastname} onChange={(e) => setLastName(e.target.value)} type = "text" placeholder="last name" id ="lastname" name="lastname"></input>

                <label htmlFor ="address">Address</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type = "text" placeholder="address" id ="address" name="address"></input>

                <label htmlFor ="phone">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type = "text" placeholder="phone" id ="phone" name="phone"></input>

                <label htmlFor ="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="email" id ="email" name="email"></input>
               
                <label fhtmlFor ="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type = "password" placeholder="***********" id ="password" name="password"></input>
               
                <button type="submit">Create Account</button>
          
                <div>  
                Already have an Account?<a href="/login" >Log in here</a>
                </div>
            </form>
            
        </>
    )
}

export default CreateAccount;