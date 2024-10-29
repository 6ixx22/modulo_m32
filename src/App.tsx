import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ListaContatos from './components/ListaContatos';

const App: React.FC = () => (
  <Provider store={store}>
    <div style={{ padding: '20px', backgroundColor: '#121212', minHeight: '100vh', color: 'white' }}>
      <h1>Lista de Contatos</h1>
      <ListaContatos />
    </div>
  </Provider>
);

export default App;
