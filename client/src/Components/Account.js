import React from "react";


function Account({currentCustomer,onLogout}) {
  
  // const formik = useFormik({
  //   initialValues: {
  //       firstname: currentCustomer.firstname,
  //       lastname: currentCustomer.lastname,
  //       email: currentCustomer.email,
  //       phone: currentCustomer.phone,
  //       address: currentCustomer.address,
  //       password: currentCustomer.password
  //   },
  //   validationSchema: yup.object({
  //       email: yup.string().email("Invalid email").required("Must enter email"),
  //       firstname: yup.string().required("Must enter a first name").max(15, 'must be 15 chars max'),
  //       lastname: yup.string().required("Must enter a  last name").max(15, 'must be 15 chars max'),
  //       address: yup.string().required("Must enter a street address").max(200, 'must be 200 chars max'),
  //       phone: yup.number().integer().required("phone number required").typeError("Phone number should only contain digits"),
  //       password: yup.string().required("please enter a password"),
  //   }),

  
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
            <div>Address: {currentCustomer.address}</div>
          <form>
            <ul>
              <li>
              <button onClick={onLogout}>Log Out</button>
              </li>
              <li>
              <button >View purchase history</button>
              </li>
              <li>
                <br></br>
                <br></br>
              <button  >Delete Account</button>
              </li>
            </ul>
          </form>
        </div>
  );
}
export default Account;





