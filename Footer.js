import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Cardápio React Otimizado</h3>
          <p>Exemplo de implementação com code splitting estratégico e fontes otimizadas</p>
        </div>
        <div className="footer-section">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 11h às 22h</p>
          <p>Sábados e Domingos: 11h às 23h</p>
        </div>
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Telefone: (11) 9999-9999</p>
          <p>Email: contato@cardapioreact.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Cardápio React. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
