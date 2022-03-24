import { useState } from "react";

import './styles.css'

export default function Assento(props){
    const {numero} = props;
    const [selecionado, setSelecionado] = useState(false);
    

    if(selecionado){
        return (
            <p className='bolinha assento-selecionado'>{numero}</p>
        )
    }else{
        return(
            <p className='bolinha'  onClick={()=>{setSelecionado(true)}}>{numero}</p>
    
        )
    }
    
    
}