
import Filmes from '../Filmes'

import './styles.css'


export default function Footer(props){
    return(
        <div className='Footer'>
            <Filmes 
                imagem = {props.filme}
                alt = {props.nome}
            />

            <p>{props.info}</p>
        </div>
    );
}