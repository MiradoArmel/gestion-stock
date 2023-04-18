import React, { useState } from 'react';

const StockOutForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingStock = localStorage.getItem('stock');
    const existingStockArr = existingStock ? JSON.parse(existingStock) : [];
    const index = existingStockArr.findIndex((item) => item.name === name);
    if (index >= 0 && existingStockArr[index].quantity >= quantity) {
      existingStockArr[index].quantity -= quantity;
      localStorage.setItem('stock', JSON.stringify(existingStockArr));

      const stockOut = { name, quantity };
      const existingStockOut = localStorage.getItem('stock-out');
      const existingStockOutArr = existingStockOut ? JSON.parse(existingStockOut) : [];
      existingStockOutArr.push(stockOut);
      localStorage.setItem('stock-out', JSON.stringify(existingStockOutArr));

      setName('');
      setQuantity(0);
    } else {
      alert('Stock insuffisant');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" form-group" col-md-12>
        <label htmlFor="name">NOM:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className=" form-group">
        <label htmlFor="quantity">QUANTITE:</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div><br></br>
      <button type="submit" className="btn btn-primary">SORTIR</button>
    </form>
  );
};

export default StockOutForm;
