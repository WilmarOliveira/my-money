import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

/*axios.get('https://aula-mymoney.firebaseio.com/valor.json')
  .then(res => {
    console.log(res);
  })*/

/*axios.post('https://aula-mymoney.firebaseio.com/valor.json', {
  valor2: 3000
})
  .then(res => {
    console.log(res);
  })*/

  const url = 'https://aula-mymoney.firebaseio.com/movimentacoes/a/2019-08.json';

  const reducer = (state, action) => {
    switch(action.type) {
      case 'REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'SUCESS':
        return {
          ...state,
          loading: false,
          data: action.data
        }
      default:
        return state;
    }
  }

function App() {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {}
  })

  useEffect(() => {
    dispatch({ type: 'REQUEST' });
    axios.get(url)
      .then(res => {
        dispatch({ type: 'SUCESS', data: res.data })
      })
  }, []);

  return (
    <div>
      <h1>My money</h1>
      {JSON.stringify(data.data)}
      {data.loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
