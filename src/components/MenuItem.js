import React from 'react';

const MenuItem = ({ item }) => {
  const formatarPreco = (preco) => {
    return preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="menu-item">
      <img 
        src={item.imagemUrl} 
        alt={item.nome}
        loading="lazy"
        width="300"
        height="220"
        style={{ aspectRatio: '300/220' }}
      />
      <div className="menu-item-content">
        <h3>{item.nome}</h3>
        <p>{item.descricao}</p>
        <span className="price">{formatarPreco(item.preco)}</span>
      </div>
    </div>
  );
};

export default MenuItem; 