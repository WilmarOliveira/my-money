import React from 'react';
import Rest from './rest';

const baseURL = 'https://aula-mymoney.firebaseio.com/';
const { useGet, usePost, useDelete } = Rest(baseURL);

function App() {
  const data = useGet('movimentacoes/2019-08');
  const [postData, post] = usePost('movimentacoes/2019-08');
  const [deleteData, remove] = useDelete();

  const saveNew = () => {
    post({ valor: 20, descricao: 'Pastel' })
  }

  const doRemove = () => {
    remove('movimentacoes/2019-08/-MFXwDNzUqGTTCRn23iV');
  }

  return (
    <div>
      <h1>My money</h1>
      {JSON.stringify(data.data)}
      {data.loading && <p>Loading...</p>}
      <button onClick={saveNew} >Salvar</button>
      <pre>{JSON.stringify(postData)}</pre>
      <button onClick={doRemove} >Delete</button>
      <pre>{JSON.stringify(deleteData)}</pre>
    </div>
  );
}

export default App;
