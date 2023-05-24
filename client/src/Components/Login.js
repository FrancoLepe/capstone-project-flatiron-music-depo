

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const [formErrors, setFormErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleLoginResult(customer) {
    if (customer.hasOwnProperty('id')) {
      handleLogin(customer);
      navigate("/");
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
            });
          } else {
            r.json().then((err) => {
              setFormErrors(err.error);
            });
          }
        });

    } catch (err) {
      setFormErrors(err.error);
    }
  }

  return (
    <div className="content">
      <div className="text">
        Login Form
      </div>
      <form onSubmit={handleLoginSubmit}>
        <div className="field">
          <input
            value={email}
            onChange={handleEmail}
            type="text"
            required
          />
          <span className="fas fa-user"></span>
          <label>Email or Phone</label>
        </div>
        <div className="field">
          <input
            value={password}
            onChange={handlePassword}
            type="password"
            required
          />
          <span className="fas fa-lock"></span>
          <label>Password</label>
        </div>
        
        <button type="submit">Sign in</button>
        <div className="sign-up">
          Not a member? <a href="/createaccount">Create Account</a>
        </div>
      </form>
    </div>
  );
}

export default Login;

//############################ works but above is more styled####
// import React, { useState } from "react"
// import {  useNavigate } from "react-router-dom";
// import './login.css';


// function Login({handleLogin}){

//     const [email, setEmail]=useState('');
//     const [password, setPassword]=  useState('');
//     const handleEmail = e => setEmail(e.target.value)
//     const handlePassword = e => setPassword(e.target.value)
//     const [formErrors, setFormErrors] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigate = useNavigate();

//     function handleLoginResult(customer) {
//         if (customer.hasOwnProperty('id')) {
//             handleLogin(customer);
//             navigate("/")
//         }
//     }

//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     console.log(email)
//     // }
//     function handleLoginResult(customer) {
//         if (customer.hasOwnProperty('id')) {
//             handleLogin(customer);
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
//                     email: email,
//                     password: password
//                 })
//             };
//             fetch('http://localhost:5555/login', requestOptions)
//                 .then((r) => {
//                     setIsLoading(false);

//                     if (r.ok) {
//                         r.json().then((customer) => {
//                             handleLoginResult(customer);
                            
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
//         <>
//             <form onSubmit={handleLoginSubmit}>
//                 <label htmlFor ="email">Email</label>
//                 <input value={email} onChange={handleEmail} type = "email" placeholder="email" id ="email" name="email"></input>
//                 <label htmlFor ="password">Password</label>
//                 <input value={password} onChange={handlePassword} type = "password" placeholder="***********" id ="password" name="password"></input>
//                 <button type="submit">Log In</button>
            
//             <div>  
//                 Don't have an Account?<a href="/createAccount" >Create account</a>
//             </div>
//             </form>
//         </>
//     )
// }

// export default Login;


// #####################################################  start over line

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login({ handleLogin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [formErrors, setFormErrors] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   function handleLoginResult(customer) {
//     if (customer.hasOwnProperty('id')) {
//       handleLogin(customer);
//       navigate("/");
//     }
//   }

//   function handleLoginSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const requestOptions = {
//         method: 'POST',
//         credentials: "include",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: email,
//           password: password
//         })
//       };
//       fetch('http://localhost:5555/login', requestOptions)
//         .then((response) => {
//           setIsLoading(false);

//           if (response.ok) {
//             response.json().then((customer) => {
//               handleLoginResult(customer);
//             });
//           } else {
//             response.json().then((err) => {
//               setFormErrors(err.error);
//             });
//           }
//         })
//         .catch((error) => {
//           setIsLoading(false);
//           setFormErrors(['Failed to fetch']);
//           console.error('Error:', error);
//         });
//     } catch (error) {
//       setIsLoading(false);
//       setFormErrors(['Failed to fetch']);
//       console.error('Error:', error);
//     }
//   }

//   return (
//     <>
//       <form onSubmit={handleLoginSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="email"
//           id="email"
//           name="email"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           placeholder="***********"
//           id="password"
//           name="password"
//         />
//         <button type="submit">Log In</button>

//         <div>
//           Don't have an Account?
//           <a href="/createAccount">Create account</a>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Login;









