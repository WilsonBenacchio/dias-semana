import { useState } from 'react';
import './Topo.css';

function Topo(props) {
    const [entrada, setEntrada] = useState('São Paulo');

    const enviaCidade = () => {
        props.pegarCidade(entrada);
    };

    const handleKeyDown = (evento) => {
        if (evento.key === 'Enter') {
            enviaCidade();
        }
    };

    return (
        <header>
            <div>
                <h2>Previsão do tempo:</h2>
            </div>
            <div className='pesquisa'>
                <input
                    type='text'
                    placeholder='buscar cidade'
                    onChange={(evento) => setEntrada(evento.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <span onClick={enviaCidade}>&#x1F50E;&#xFE0E;</span>
            </div>
        </header>
    );
}

export default Topo;
