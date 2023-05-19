import React from "react";


function Account({currentCustomer,onLogout}) {
  
    return (
        <div>
          <h1>hello account</h1>
          <div>
                <h2><b>Logged in as:</b></h2>
            </div>
            <br/>
            <div>Name: {currentCustomer.firstname} {currentCustomer.lastname}</div>
            <div>Email: {currentCustomer.email}</div>
            <div>Phone: {currentCustomer.phone}</div>
            <div>Address: {currentCustomer.adress}</div>
          <form>
            <ul>
              <li>
              <button onClick={onLogout}>Log Out</button>
              </li>
              <li>
              <button  >Delete Account</button>
              </li>
            </ul>
          </form>
        </div>
  );
}
export default Account;





