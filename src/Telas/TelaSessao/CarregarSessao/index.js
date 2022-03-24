import Assento from '../../../Comṕonentes/Assento'

import './styles.css'

export default function CarregarSessao(){
    function rederizarAssentos(){
        const TodosAssentos = [];
        for(let i = 1; i<=50 ; i++){
            if(i<10){
                TodosAssentos.push(
                    <Assento numero = {`0${i}`} key={i}/>
                )
            }else{
                TodosAssentos.push(
                    <Assento numero = {`${i}`} key={i}/>
                )
            }
        }

        return TodosAssentos;
    }

    return(
        <div className='TelaSessao'>
            <div className='selecione-assento'>
                <p>Selecione o(s) assento(s)</p>
            </div>
            <div className='container-assento'>
                <div className='assentos'>
                    {rederizarAssentos()}
                </div>
            </div>

        </div>
    );
}