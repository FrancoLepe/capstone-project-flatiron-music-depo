
import React, { useEffect, useState } from 'react';
import './styles.css';

const PurchaseHistory = () => {
  const [purchaseHistoryData, setPurchaseHistoryData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/purchase_history') 
      .then(response => response.json())
      .then(data => setPurchaseHistoryData(data))
      .catch(error => console.error(error));
  }, []);

  const deletePurchaseHistory = (id) => {
    fetch(`http://localhost:5555/purchase_history/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 200) {
          // Remove the deleted item from the state
          setPurchaseHistoryData(prevData =>
            prevData.filter(history => history.id !== id)
          );
        } else {
          console.error('Failed to delete purchase history');
        }
      })
      .catch(error => console.error(error));
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          {/* <th>ID</th> */}
          <th>Product ID</th>
          <th>Customer ID</th>
          
          <th>Product Name</th>
          <th>Price</th>
          <th>Purchase Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {purchaseHistoryData.map(history => (
          <tr key={history.id}>
            {/* <td>{history.id}</td> */}
            <td>{history.product_id}</td>
            <td>{history.customer_id}</td>
            <td>{history.name}</td>
            <td>{history.price}</td>
            <td>{history.purchase_date}</td>
            <td>
              <button onClick={() => deletePurchaseHistory(history.id)}>
                Delete History
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PurchaseHistory;

// import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// import './styles.css'

// const PurchaseHistory = () => {
//   const [purchaseHistoryData, setPurchaseHistoryData] = useState([{'id': 1, 'product_id': 1, 'name': 'Les Paul', 'price': 2799.99, 'purchase_date': new Date().toLocaleDateString('en-US')}, {'id': 2, 'product_id': 2, 'name': 'SG', 'price': 1599.99, 'purchase_date': new Date().toLocaleDateString('en-US')}, {'id': 3, 'product_id': 8, 'name': 'SM 57', 'price': 99.99, 'purchase_date': new Date().toLocaleDateString('en-US')}, {'id': 4, 'product_id': 10, 'name': 'American Professional II Precision Bass', 'price': 1749, 'purchase_date': new Date().toLocaleDateString('en-US')}]);



//   return (
//     <table className="styled-table">
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Product ID</th>
//           <th>Product Name</th>
//           <th>Price</th>
//           <th>Purchase Date</th>
//         </tr>
//       </thead>
//       <tbody>
//         {purchaseHistoryData.map(history => (
//           <tr key={history.id}>
//             <td>{history.id}</td>
//             <td>{history.product_id}</td>
//             <td>{history.name}</td>
//             <td>{history.price}</td>
//             <td>{history.purchase_date}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default PurchaseHistory;