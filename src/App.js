import React from 'react';
import Rest from './utils/rest';
import Header from './elements/Header';
import Home from './pages/Home';
import Movimentacoes from './pages/Movimentacoes';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const baseURL = 'https://aula-mymoney.firebaseio.com/';
const { useGet, usePost, useDelete } = Rest(baseURL);

function App() {
  //const data = useGet('movimentacoes/2019-08');
  const data = useGet('meses');
  //const [postData, post] = usePost('movimentacoes/2019-08');
  //const [deleteData, remove] = useDelete();

  const saveNew = () => {
    //post({ valor: 20, descricao: 'Pastel' })
  }

  const doRemove = () => {
    //remove('movimentacoes/2019-08/-MFXwDNzUqGTTCRn23iV');
  }

  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/movimentacoes/:data" component={Movimentacoes} />
    </Router>
  );
}

export default App;
