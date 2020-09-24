import React, { useState, useRef } from 'react';
import { Redirect } from 'react-router-dom';

const minAno = 2019;
const maxAno = 2022;

const AdicionarMeses = () => {
    const anos = [];
    const meses = [];
    const [redir, setRedir] = useState('');
    const refAno = useRef('');
    const refMes = useRef('');

    for (let i = minAno; i <= maxAno; i++) {
        anos.push(i);
    }

    for (let i = 1; i <= 12; i++) {
        meses.push(i);
    }

    const zeroPad = (num) => {
        if (num < 10) {
            return '0' + num
        } else {
            return num;
        }
    }

    const verMes = () => {
        setRedir(`${refAno.current.value}-${refMes.current.value}`);
    }

    if (redir !== '') {
        return <Redirect to={`/movimentacoes/${redir}`} />
    }

    return(
        <>
            <h2>Adicionar Mês</h2>
            <select ref={refAno} >
                {anos.map((ano) => {
                    return <option value={ano} >{ano}</option>
                })}
            </select>
            <select ref={refMes} >
                {meses.map(zeroPad).map((mes) => {
                    return <option value={mes} >{mes}</option>
                })}
            </select>
            <button onClick={verMes} >Adicionar Mês</button>
        </>
    );
}

export default AdicionarMeses;