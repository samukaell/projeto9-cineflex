
import './styles.css'

export default function Horairo(props){

    function horairo(hora){
        return (
            <div className="horarios-caixa">
                <p>{hora}</p>
            </div>
        )
    }

    return (
        <div className="Horario">
            <p>{props.dia} - {props.data}</p>
            <div className='container-horarios'>
                {horairo(props.primeiroHorario)}
                {horairo(props.segundoHorario)}
            </div>
        </div>
    );
}

