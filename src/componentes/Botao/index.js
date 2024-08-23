import React from 'react'; // Adicione esta linha
import './botao.css'

const Botao = ({ texto }) => {
    return <button className="botao">
        {texto}
    </button>
}

export default Botao