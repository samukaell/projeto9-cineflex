import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

import Filmes from '../../../Comṕonentes/Filmes';

export default function CarregarFilmes() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {
            const {data} = resposta;
            console.log("O data ->",data);
			setItems(data);
		})
        requisicao.catch(err=> console.log(err.resposta));
        
	}, []);

	return (
		<>
			{
                items.map(filme =>{
                    const {posterURL , id, title} = filme;
                    return(        
                        <Link to={`/filme/${id}`} key={id}>           
                            <Filmes                        
                                imagem = {posterURL}
                                alt = {title}
                                key = {id}                         
                            />  
                        </Link>                      
                    )
                })
            }
		</>
	);
}