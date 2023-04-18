import React, { useState } from 'react';

const Invoice = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const invoice = { name, quantity, price };
    const existingInvoice = localStorage.getItem('invoice');
    const existingInvoiceArr = existingInvoice ? JSON.parse(existingInvoice) : [];
    existingInvoiceArr.push(invoice);
    localStorage.setItem('invoice', JSON.stringify(existingInvoiceArr));
    setName('');
    setQuantity(0);
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-3 d-flex flex-column align-items-center">
      <div className="form-group">
        <label htmlFor="nameInput">Nom de produit:</label>
        <input
          type="text"
          className="form-control"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantityInput">Quantité:</label>
        <input
          type="number"
          className="form-control"
          id="quantityInput"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priceInput">Prix:</label>
        <input
          type="number"
          className="form-control"
          id="priceInput"
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
      </div><br></br>
      <button type="submit" className="btn btn-primary">FACTURE</button>
    </form>
  );
};

export default Invoice;
