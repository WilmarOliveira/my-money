import React from 'react';
import Meses from './Meses';
import AdicionarMeses from './AdicionarMeses';

const Home = () => {
    return(
        <div className="container" >
            <AdicionarMeses />
            <Meses />
        </div>
    )
    
}

export default Home;