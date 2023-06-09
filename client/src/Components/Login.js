import React, { useState } from "react"
import {  useNavigate } from "react-router-dom";


function Login({handleLogin}){

    const [email, setEmail]=useState('');
    const [password, setPassword]=  useState('');
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const [formErrors, setFormErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleLoginResult(customer) {
        if (customer.hasOwnProperty('id')) {
            handleLogin(customer);
            navigate("/")
        }
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(email)
    // }
    function handleLoginResult(customer) {
        if (customer.hasOwnProperty('id')) {
            handleLogin(customer);
            navigate("/")
        }
    }

    function handleLoginSubmit(e) {
        e.preventDefault();
        setIsLoading(true);


        try {
            const requestOptions = {
                method: 'POST',
                credentials: "include",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            };
            fetch('http://localhost:5555/login', requestOptions)
                .then((r) => {
                    setIsLoading(false);

                    if (r.ok) {
                        r.json().then((customer) => {
                            handleLoginResult(customer);
                            
                        })
                    } else {
                        r.json().then((err) => {
                            setFormErrors(err.error)
                        });
                    }
                })
            
            
        } catch (err) {
            setFormErrors(err.error);
        }


    }

    return ( 
        <>
            <form className="form-container" onSubmit={handleLoginSubmit}>
                <br></br>
                <label htmlFor ="email">Email</label>
                <input value={email} onChange={handleEmail} type = "email" placeholder="email" id ="email" name="email"></input>
                <label htmlFor ="password">Password</label>
                <input value={password} onChange={handlePassword} type = "password" placeholder="***********" id ="password" name="password"></input>
               <br></br>
                <button type="submit">Log In</button>
            <br>
            </br>
            <div> 
            <br>
            </br> 
                Don't have an Account?<a href="/createAccount" >Create account</a>
            <br></br>
            <br></br>
            </div>
            </form>
        </>
    )
}

export default Login;













/////////////////////////////////////////example////////


// import React, { useState } from "react";
// import {  useNavigate } from "react-router-dom";
// import API_URL from "../apiConfig.js";

// function Login({ handleLogin }) {

//     const [newEmail, setNewEmail] = useState('')
//     const [newPassword, setNewPassword] = useState('')
//     const handleEmail = e => setNewEmail(e.target.value)
//     const handlePassword = e => setNewPassword(e.target.value)
//     const [formErrors, setFormErrors] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();


//     const formField = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "

//     function handleLoginResult(user) {
//         if (user.hasOwnProperty('id')) {
//             handleLogin(user);
//             navigate("/")
//         }
//     }

//     function handleLoginSubmit(e) {
//         e.preventDefault();
//         setIsLoading(true);


//         try {
//             const requestOptions = {
//                 method: 'POST',
//                 credentials: "include",
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     email: newEmail,
//                     password: newPassword
//                 })
//             };
//             fetch(`${API_URL}/login`, requestOptions)
//                 .then((r) => {
//                     setIsLoading(false);

//                     if (r.ok) {
//                         r.json().then((user) => {
//                             handleLoginResult(user);
                            
//                         })
//                     } else {
//                         r.json().then((err) => {
//                             setFormErrors(err.error)
//                         });
//                     }
//                 })
            
            
//         } catch (err) {
//             setFormErrors(err.error);
//         }


//     }

//     return (
//         <div className='flex justify-center items-center  bg-yellow-50'>
//             <div  className="  max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">
//             <form className="space-y-6" onSubmit={handleLoginSubmit}>
//                 <h1 >Log in</h1>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder="name@company.com"
//                     className={formField}
//                     value={newEmail}
//                     onChange={handleEmail} />
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="password"
//                     className={formField}
//                     value={newPassword}
//                     onChange={handlePassword}
//                 />
//                 <button type="submit" className="w-full text-white-100 bg-emerald-400 hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
//                 <div>{formErrors.length > 0
//                     ? 
//                         <><p key={formErrors} style={{ color: "red" }}>
//                             {formErrors}
//                         </p></>
//                     : null}
//                     </div>
//                 <div className="text-sm font-medium text-gray-500 ">
//                     Not registered? <a href="/createaccount" className="text-emerald-400 hover:underline ">Create account</a>
//                 </div>
//             </form>
//         </div></div>
//     )
// }

// export default Login;