import React from 'react';
import './ItemDetails.css';

function ItemDetails({ item }) {
  if (!item) return null;

  return (
    <div className="item-details">
      <div className="item-details-content">
        <div className="item-image">
          <img 
            src={item.image} 
            alt={item.name} 
            width="400" 
            height="300" 
          />
        </div>
        <div className="item-info">
          <h2>{item.name}</h2>
          <p className="description">{item.description}</p>
          <p className="price">R$ {item.price.toFixed(2)}</p>
          <div className="actions">
            <button className="btn primary">Adicionar ao Pedido</button>
            <button className="btn secondary">Voltar ao Cardápio</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
