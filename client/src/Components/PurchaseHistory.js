import React, { useEffect, useState, useRef } from 'react';
import './styles.css';
import clickSound from './Keyboard-click.mp3';

const PurchaseHistory = () => {
  const [purchaseHistoryData, setPurchaseHistoryData] = useState([]);
  const audioRef = useRef(null);
  const [shouldPlayClickSound, setShouldPlayClickSound] = useState(false);

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
          playClickSound();
        } else {
          console.error('Failed to delete purchase history');
        }
      })
      .catch(error => console.error(error));
  };


  function playClickSound() {
    audioRef.current.play();
  }

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Product</th>
            <th>Customer ID</th>

            {/* <th>Product Name</th>
            <th>Price</th> */}
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
              {/* <td>{history.name}</td>
            <td>{history.price}</td> */}
              <td>{history.purchase_date}</td>

              <td>
                <button
                  onClick={() => {
                    deletePurchaseHistory(history.id);
                    setShouldPlayClickSound(true); // Set shouldPlayClickSound to true
                  }}
                >
                  Delete History
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <audio ref={audioRef}>
        <source src={clickSound} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default PurchaseHistory;


      