import React from 'react'; // Adicione esta linha
import './colaborador.css';
import { IoMdCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }
    const propFavoritos = {
        size: 25,
        onClick: favoritar
    }
    return (<div className="colaborador">
        <IoMdCloseCircle size={25} className='deletar' onClick={aoDeletar} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito ? <FaHeart {...propFavoritos} color='#ff0000' /> : <FaRegHeart {...propFavoritos} />}
            </div>
        </div>
    </div>)
}

export default Colaborador