import React, { useState } from 'react';

const StockForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStock = { name, quantity, price };
    const existingStock = localStorage.getItem('stock');
    const existingStockArr = existingStock ? JSON.parse(existingStock) : [];
    existingStockArr.push(newStock);
    localStorage.setItem('stock', JSON.stringify(existingStockArr));
    setName('');
    setQuantity(0);
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-3">
      <h2>AJOUT PRODUIT</h2>
      <div className=" form-group">
        <label htmlFor="name">Nom de PRODUIT:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder='entrer le nom...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group"  > 
        <label htmlFor="quantity">Quantité:</label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          placeholder='1,2,3,....'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <div className=" form-group">
        <label htmlFor="price">Prix en Ar:</label>
        <input
          type="number"
          className="form-control"
          id="price"
          placeholder='00000....'
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>
      <br></br>
      <button type="submit" className="btn btn-primary"  >
        AJOUTER AU STOCK
      </button>
    </form>
  );
};

export default StockForm;
