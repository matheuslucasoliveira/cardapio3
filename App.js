import React, { Suspense, useState } from 'react';
import './App.css';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';

// Code Splitting: Componentes carregados dinamicamente com React.lazy
const Menu = React.lazy(() => import('./components/Menu'));
const ItemDetails = React.lazy(() => import('./components/ItemDetails'));
const Footer = React.lazy(() => import('./components/Footer'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="App">
      <Header />
      
      {/* Componente principal carregado imediatamente */}
      <main>
        {/* Code Splitting: Menu carregado dinamicamente */}
        <Suspense fallback={<LoadingSpinner message="Carregando cardápio..." />}>
          <Menu onSelectItem={setSelectedItem} />
        </Suspense>

        {/* Code Splitting: Detalhes do item carregado dinamicamente */}
        {selectedItem && (
          <Suspense fallback={<LoadingSpinner message="Carregando detalhes..." />}>
            <ItemDetails item={selectedItem} />
          </Suspense>
        )}

        {/* Code Splitting: Depoimentos carregados dinamicamente */}
        <Suspense fallback={<LoadingSpinner message="Carregando depoimentos..." />}>
          <Testimonials />
        </Suspense>
      </main>

      {/* Code Splitting: Footer carregado dinamicamente */}
      <Suspense fallback={<LoadingSpinner message="Carregando rodapé..." />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
