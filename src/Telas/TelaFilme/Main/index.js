import Horairo from "../../../Comṕonentes/Horario"

import './styles.css'

export default function Main(props){
    const {dias} = props;
    return(
        <div className="Main-filmes">
            <div className="selecionar-horario">
                <p>Selecione o horário</p>
            </div>
            <div className="horarios-disponivies">
            {dias.map(time=>{
                return(
                    <Horairo
                        dia = {time.weekday}
                        data = {time.date}
                        key = {time.id}
                        primeiroHorario = {time.showtimes[0].name}
                        segundoHorario = {time.showtimes[1].name}
                    />
                )
            })}
            </div>
        </div>
    )
}

/* 
    {dias.map(time=>{
        return(
            <Horairo
                dia = {time.weekday}
                data = {time.date}
                key = {time.id}
                primeiroHorario = {time.showtimes[0].name}
                segundoHorario = {time.showtimes[1].name}
            />
        )
    })}

*/