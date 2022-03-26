import { useState } from 'react';
import Assento from'../../../Comṕonentes/Assento'

import './styles.css'

export default function Main(props){
    const {assentos} = props;

    const [assentoSelecionado,setAssentoSelecionado] = useState([]);
    const [nomeComprador,setNomeComprador] = useState("");
    const [cpfComprador,setCpfComprador] = useState("");

    function rederizarAssentos(){
        const TodosAssentos = [];
        assentos.map((assento,index)=>{
            if(index<10){
                TodosAssentos.push(
                    <Assento 
                        numero = {`0${assento.name}`} 
                        key={assento.id}
                        indisponivel = {assento.isAvailable}
                        id = {assento.id}
                        assentosSelecionados = {assentoSelecionado}
                        callback ={setAssentoSelecionado}
                    />
                )
            }else{
                TodosAssentos.push(
                    <Assento 
                        numero = {`${assento.name}`} 
                        key={assento.id}
                        indisponivel = {assento.isAvailable}
                        id = {assento.id}
                        assentosSelecionados = {assentoSelecionado}
                        callback ={setAssentoSelecionado}
                    />
                )
            }
            return TodosAssentos;
            
        })
        return TodosAssentos;
    }
    function handleSubmit(e){
        e.preventDefault();
        if(nomeComprador !== "" && cpfComprador !== ""){
            alert("Seu nome:"+nomeComprador+" e seu cpf:"+cpfComprador);
        }
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
            <form onSubmit={handleSubmit}>
                <div className='caixa-form'>
                    <p className='texto-input'>Nome do comprador:</p>     
                    <input type="text" name="nomeComprador" value={nomeComprador} onChange={e => setNomeComprador(e.target.value)} placeholder='Digite seu nome...' required/>
                    <p className='texto-input'>CPF do comprador:</p>     
                    <input type="text" name="nomdeComprador" value={cpfComprador} onChange={e => setCpfComprador(e.target.value)} placeholder='Digite seu CPF...' required/>
                </div>
                <button className='botao-form' type='subimit'>Reservar assento(s)</button>
            </form>
        </div>
    );
}