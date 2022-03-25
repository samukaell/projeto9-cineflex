import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Main from "./Main";
import Footer from "../../Comṕonentes/Footer";

import './styles.css'

export default function TelaFilme(){

    const [items, setItems] = useState({});
    const [diasHorario, setDiasHorario] = useState([]);

    const {idFilme} = useParams();
    console.log("O id do filme ->",idFilme)
	useEffect(() => {
		const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

		requisicao.then(resposta => {
            const {data} = resposta;
            console.log("O data ->",data);
			setItems(data);
            setDiasHorario(data.days);
		})
        requisicao.catch(err=> console.log(err.resposta));
        
	}, []);

    const {title,posterURL} = items;
    //
    return(
        <div className="TelaFilme">
            <Main
                dias = {diasHorario}
            />
            <Footer 
                filme = {posterURL}
                nome = {title}
                info = {title}
            />
        </div>
    );
}