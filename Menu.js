import React from 'react';
import './Menu.css';

const menuItems = [
  {
    id: 1,
    name: 'Hambúrguer Clássico',
    description: 'Hambúrguer de carne bovina, queijo, alface, tomate e molho especial',
    price: 25.90,
    image: 'https://via.placeholder.com/300x200?text=Hamburguer'
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela, manjericão fresco e azeite',
    price: 45.90,
    image: 'https://via.placeholder.com/300x200?text=Pizza'
  },
  {
    id: 3,
    name: 'Salada Caesar',
    description: 'Alface romana, croutons, parmesão e molho caesar',
    price: 22.90,
    image: 'https://via.placeholder.com/300x200?text=Salada'
  }
];

function Menu({ onSelectItem }) {
  return (
    <section className="menu-section">
      <h2>Nosso Cardápio</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item" onClick={() => onSelectItem(item)}>
            <img 
              src={item.image} 
              alt={item.name} 
              loading="lazy" // Lazy loading para imagens
              width="300" 
              height="200" 
            />
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="price">R$ {item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
