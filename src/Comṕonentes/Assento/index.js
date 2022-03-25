import { useState } from "react";

import './styles.css'

export default function Assento(props){
    const {numero, indisponivel} = props;
    const [selecionado, setSelecionado] = useState(false);
    
    if(indisponivel){
        return(
            <p className='bolinha assento-indisponivel'>{numero}</p>
        )
    }else if(selecionado){
        return (
            <p className='bolinha assento-selecionado'>{numero}</p>
        )
    }else{
        return(
            <p className='bolinha'  onClick={()=>{setSelecionado(true)}}>{numero}</p>
    
        )
    }
    
    
}