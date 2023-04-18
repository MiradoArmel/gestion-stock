import React from 'react';

const StockOutList = () => {
  const stockOut = localStorage.getItem('stock-out');
  const stockOutArr = stockOut ? JSON.parse(stockOut) : [];

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">NOM DE PRODUIT</th>
            <th scope="col">QUANTITE</th>
          </tr>
        </thead>
        <tbody>
          {stockOutArr.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockOutList;
