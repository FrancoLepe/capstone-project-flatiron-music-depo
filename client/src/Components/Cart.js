import logo from '../images/cart-logo-transparent.png';
import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Cart({ addToCart, currentCustomer, myCartItems, checkInProduct }) {
  // Calculate the total price
  const totalPrice = myCartItems.reduce((accumulator, item) => accumulator + item.price, 0);
  const [isPurchased, setIsPurchased] = useState(false);

  const handleCheckout = () => {
    // Clear the checkout cart logic here
    // ...

    setIsPurchased(true);
  };

  useEffect(() => {
    if (isPurchased) {
      // Refresh the app logic here
      window.location.reload();
    }
  }, [isPurchased]);

  

  return (
    <div>
      <br></br>
      <br></br>
      <img src={logo} width={70} height={70} alt='cart logo' />
      <h1>Welcome to Your Shopping Cart</h1>
      <ProductList
        addToCart={addToCart}
        cart={true}
        currentCustomer={currentCustomer}
        products={myCartItems}
        checkInProduct={checkInProduct}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px"
        }}
      >
        <h2
          style={{
            color: "#111",
            fontSize: "30px",
            fontWeight: "bold",
            letterSpacing: "-1px",
            lineHeight: "1",
            textAlign: "center"
          }}
        >
          Total Price:
        </h2>
        <p style={{ padding: "10px", fontSize: "20px" }}>${totalPrice.toFixed(2)}</p>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
      {isPurchased && (
        <h1>Thank you for your purchase!</h1>
      )}
    </div>
  );
}

export default Cart;




// import logo from '../images/cart-logo-transparent.png';
// import React, { useEffect, useState } from "react";
// import ProductList from "./ProductList";

// function Cart({ addToCart, currentCustomer, myCartItems, checkInProduct }) {
//   // Calculate the total price
//   const totalPrice = myCartItems.reduce((accumulator, item) => accumulator + item.price, 0);
//   const [isPurchased, setIsPurchased] = useState(false);
//   const [myCartIems,setMyCartIems]= useState([])

//   const handleCheckout = () => {
//     fetch('http://localhost:5555/checkoutmycarts', {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Clear the checkout cart logic here
//           setMyCartIems([]);
//           setIsPurchased(true);
//         } else {
//           // Handle error response
//           console.log('Error deleting checkout cart');
//         }
//       })
//       .catch((error) => {
//         // Handle fetch error
//         console.log('Error deleting checkout cart:', error);
//       });
//   };

//   return (
//     <div>
//       <img src={logo} width={70} height={70} alt='cart logo' />
//       <h1 >Welcome to Your Cart</h1>
//       <ProductList
//         addToCart={addToCart}
//         cart={true}
//         currentCustomer={currentCustomer}
//         products={myCartItems}
//         checkInProduct={checkInProduct}
//       />
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "20px"
//         }}
//       >
//         <h2
//           style={{
//             color: "#111",
//             fontSize: "30px",
//             fontWeight: "bold",
//             letterSpacing: "-1px",
//             lineHeight: "1",
//             textAlign: "center"
//           }}
//         >
//           Total Price:
//         </h2>
//         <p style={{ padding: "10px", fontSize: "20px" }}>${totalPrice.toFixed(2)}</p>
//         <button onClick={handleCheckout}>Checkout</button>
//       </div>
//       {isPurchased && (
//         <h1>Thank you for your purchase!</h1>
//       )}
//     </div>
//   );
// }

// export default Cart;