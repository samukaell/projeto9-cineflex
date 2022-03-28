import { Link } from 'react-router-dom';

import './styles.css';

export default function Main(props){

    const {nomeFilme,data,hora,nomeComprador,cpfComprador,assentos} = props

    function carregarAssentos(){
        let listaAssentos = [];
        assentos.map(assento=>{
            listaAssentos.push(
                <p key={assento} className='texto-2'>Assento {assento}</p>
            );
            return listaAssentos;
        });

        
        return listaAssentos;
    }

    return (
        <div className='Main'>
            <div className='pedido-confirmado'>
                <p>Pedido feito com sucesso!</p>
            </div>
            <div className='info-telaSucesso'>
                <div className='caixa-info'>
                    <p className='texto-1'>Filme e Sessão</p>
                    <p className='texto-2'>{nomeFilme}</p>
                    <p className='texto-2'>{data} {hora}</p>
                </div>
                <div className='caixa-info'>
                    <p className='texto-1'>Ingressos</p>
                    {carregarAssentos()}
                </div>
                <div className='caixa-info'>
                    <p className='texto-1'>Comprador</p>
                    <p className='texto-2'>Nome: {nomeComprador}</p>
                    <p className='texto-2'>CPF: {cpfComprador}</p>
                </div>
            </div>

            <Link to={"/"}>
                <button className='botao-voltar-home'>Voltar para Home</button>
            </Link>
        </div>
    );
}