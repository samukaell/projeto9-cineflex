import { Link } from 'react-router-dom';

import './styles.css'

export default function Horairo(props){

    function horairo(hora,id){
        return (
            <Link to={`/sessao/${id}`}>
                <div className="horarios-caixa">
                    <p>{hora}</p>
                </div>
            </Link>           
        )
    }

    return (
        <div className="Horario">
            <p>{props.dia} - {props.data}</p>
            <div className='container-horarios'>
                {horairo(props.primeiroHorario,props.id1)}
                {horairo(props.segundoHorario,props.id2)}
            </div>
        </div>
    );
}

