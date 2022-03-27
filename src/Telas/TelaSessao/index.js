import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Main from './Main';
import Footer from '../../Comṕonentes/Footer';



export default function TelaSessao(props){

    const {callbackNome,callbackCpf,assentoSelecionado,setAssentoSelecionado} = props;

    //Estado para o Main
    const [assento,setAssento] = useState([]);
    //Estados para o footer 
    const [dia,setDia] = useState(null);
    const [hora,setHora] = useState(null)
    const [url,setUrl] = useState(null);
    const [name,setName] = useState(null);

    const {idSessao} = useParams();

    console.log("O id do Sessao ->",idSessao)
	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

		requisicao.then(resposta => {
            const {data} = resposta;
            setAssento(data.seats);
            setDia(data.day.weekday);
            setHora(data.name)
            setUrl(data.movie.posterURL);
            setName(data.movie.title);
		})
        requisicao.catch(err=> console.log(err.resposta));
        
	}, []);

    return(
        <>
            <Main
                assentos = {assento}
                callbackNome = {callbackNome}
                callbackCpf = {callbackCpf}

                assentoSelecionado = {assentoSelecionado}
                setAssentoSelecionado = {setAssentoSelecionado}
            />
            <Footer 
                filme = {url}
                nome = {name}
                info = {name}
                infoData = {dia}
                infoHora = {hora}
            />
        </>
        
    );
}