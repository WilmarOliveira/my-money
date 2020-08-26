import React from 'react';
import Rest from './rest';
import usePost from './usePost';
import useDelete from './useDelete';

const baseURL = 'https://aula-mymoney.firebaseio.com/';

const { useGet } = Rest(baseURL);

const url = 'https://aula-mymoney.firebaseio.com/movimentacoes/2019-08.json';

function App() {
  const data = useGet('movimentacoes/2019-08');
  const [postData, post] = usePost(url);
  const [deleteData, remove] = useDelete();

  const saveNew = () => {
    post({ valor: 20, descricao: 'Pastel' })
  }

  const doRemove = () => {
    remove('https://aula-mymoney.firebaseio.com/movimentacoes/2019-08/-MFXwBNnhF6ic55zvxpK.json');
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
