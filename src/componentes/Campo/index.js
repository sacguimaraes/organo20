import React from 'react'; // Adicione esta linha
import './campo.css'

const Campo = ({ type = 'Text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input value={valor} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio} placeholder={placeholder} type={type} />
    </div>)
}

export default Campo