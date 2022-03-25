
import Filmes from '../Filmes'

import './styles.css'


export default function Footer(props){
    const {filme,nome,info,infoData,infoHora} = props;

    if(infoData !== undefined){
        return(
            <div className='Footer'>
                <Filmes 
                    imagem = {filme}
                    alt = {nome}
                />
    
                <div className='caixa-info'>
                    <p>{info}</p>
                    <p>{infoData} - {infoHora}</p>
                </div>
            </div>
        );
    }else{
        return(
            <div className='Footer'>
                <Filmes 
                    imagem = {filme}
                    alt = {nome}
                />
    
                <div className='caixa-info'>
                    <p>{info}</p>
                    
                </div>
            </div>
        );
    }
    
}