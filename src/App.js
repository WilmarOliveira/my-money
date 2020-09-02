import React from 'react';
import Rest from './rest';
import Header from './elements/Header';
import Meses from './Meses';
import AdicionarMeses from './AdicionarMeses';

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
    <div>
      <Header />
      <div className="container" >
        <AdicionarMeses />
        <Meses />
      </div>
      
    </div>
  );
}

export default App;
