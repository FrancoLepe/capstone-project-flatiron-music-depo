
// import React, { useEffect, useState } from "react";
// import ProductList from "./ProductList";

// function Cart({ addToCart, currentCustomer, myCartItems, checkInProduct }) {
//   // Calculate the total price
//   const totalPrice = myCartItems.reduce((accumulator, item) => accumulator + item.price, 0);

//   return (
//     <div>
//       <h1>welcome to your Cart</h1>
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
//         <button>Checkout</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;


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

  return (
    <div>
      <h1>Welcome to Your Cart</h1>
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
