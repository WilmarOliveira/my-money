import React from 'react';
import Rest from './rest';

const baseURL = 'https://aula-mymoney.firebaseio.com/';
const { useGet, usePost, useDelete } = Rest(baseURL);

const Meses = () => {
    const data = useGet('meses');

    if (data.loading) {
        return <span>Carregando...</span>
    }
    if (Object.keys(data.data).length > 0) {
        return (
            <table className="table" >
              <thead>
                <tr>
                  <th>Mês</th>
                  <th>Entrada</th>
                  <th>Previsão Entrada</th>
                  <th>Saída</th>
                  <th>Previsão Saída</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data.data).map((mes) => {
                  return (
                    <tr key={mes} >
                      <td>{mes}</td>
                      <td>{data.data[mes].entradas}</td>
                      <td>{data.data[mes].previsao_entrada}</td>
                      <td>{data.data[mes].saida}</td>
                      <td>{data.data[mes].previsao_saida}</td>
                    </tr>
                  )
                })
                }
                
              </tbody>
  
            </table>
        )
    }

    return null
}

export default Meses;