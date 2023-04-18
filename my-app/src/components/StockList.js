import React, { useState } from 'react';

const StockList = () => {
  const stock = localStorage.getItem('stock');
  const stockArr = stock ? JSON.parse(stock) : [];

  const handleDelete = (index) => {
    const newStock = [...stockArr];
    newStock.splice(index, 1);
    localStorage.setItem('stock', JSON.stringify(newStock));
    window.location.reload();
  };

  // Créer un état pour stocker les informations du stock à modifier
  const [editStock, setEditStock] = useState({ index: null, name: '', quantity: '', price: '' });

  const handleEdit = (index) => {
    const stockItem = stockArr[index];
    setEditStock({ index, name: stockItem.name, quantity: stockItem.quantity, price: stockItem.price });
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditStock({ ...editStock, [name]: value });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const newStock = [...stockArr];
    newStock[editStock.index] = { name: editStock.name, quantity: editStock.quantity, price: editStock.price };
    localStorage.setItem('stock', JSON.stringify(newStock));
    window.location.reload();
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">nom produit</th>
          <th scope="col">quantité produit</th>
          <th scope="col">prix</th>
          <th scope="col">BOUTON</th> {/* Ajouter une colonne pour les actions */}
        </tr>
      </thead>
      <tbody>
        {stockArr.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td> {/* Ajouter des boutons d'actions */}
              <button onClick={() => handleDelete(index)} className="btn btn-danger">Supprimer</button>
              <button onClick={() => handleEdit(index)} className="btn btn-primary"> Modifier</button>
            </td>
          </tr>
        ))}
      </tbody>
      {/* Ajouter un formulaire pour éditer un stock */}
      {editStock.index !== null && (
        <tfoot>
          <tr>
            <td colSpan="4">
              <form onSubmit={handleEditSubmit}>
                <input type="text" name="name" placeholder="nom produit" value={editStock.name} onChange={handleEditChange} required />
                <input type="number" name="quantity" placeholder="quantité produit" value={editStock.quantity} onChange={handleEditChange} required />
                <input type="number" name="price" placeholder="Prix" value={editStock.price} onChange={handleEditChange} required />
                <button type="submit"className="btn btn-primary">Enregistrer</button>
              </form>
            </td>
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default StockList;
 