import Assento from'../../../Comṕonentes/Assento'

import './styles.css'

export default function Main(props){
    const {assentos} = props;

    function rederizarAssentos(){
        const TodosAssentos = [];
        assentos.map((assento,index)=>{
            if(index<10){
                TodosAssentos.push(
                    <Assento 
                        numero = {`0${assento.name}`} 
                        key={assento.id}
                        indisponivel = {assento.isAvailable}
                    />
                )
            }else{
                TodosAssentos.push(
                    <Assento 
                        numero = {`${assento.name}`} 
                        key={assento.id}
                        indisponivel = {assento.isAvailable}
                    />
                )
            }
            return TodosAssentos;
            
        })
        return TodosAssentos;
    }

    return(
        <div className='Main'>
            <div className='selecione-assento'>
                <p>Selecione o(s) assento(s)</p>
            </div>
            <div className='container-assento'>
                <div className='assentos'>
                    {rederizarAssentos()}
                </div>
                <div className='legenda-assentos'>
                    <div className='legenda'>
                        <p className='bolinha assento-selecionado'></p>
                        <p className='legenda-bolinha'>Selecionado</p>
                    </div>
                    <div className='legenda'>
                        <p className='bolinha'></p>
                        <p className='legenda-bolinha'>Disponível</p>
                    </div>
                    <div className='legenda'>
                        <p className='bolinha assento-indisponivel'></p>
                        <p className='legenda-bolinha'>Indisponível</p>
                    </div>
                </div>
            </div>
            <form action="">
                <div className='caixa-form'>
                    <p className='texto-input'>Nome do comprador:</p>     
                    <input type="text" name="nomeComprador" placeholder='Digite seu nome...'/>
                    <p className='texto-input'>CPF do comprador:</p>     
                    <input type="text" name="nomdeComprador" placeholder='Digite seu CPF...'/>
                </div>
                <button className='botao-form' type='subimit'>Reservar assento(s)</button>
            </form>
        </div>
    );
}