import { useState } from "react";

import './styles.css'

export default function Assento(props){
    const {numero, indisponivel, id, assentosSelecionados, callback} = props;
    const [selecionado, setSelecionado] = useState(false);
    
    function selecionar(){
        let arrayAuxiliar = [];
        console.log(assentosSelecionados);
        setSelecionado(!selecionado);

        let exiteId = false;
        assentosSelecionados.map(lugar=>{
            if(lugar !== id){
                arrayAuxiliar.push(lugar);
            }else{
                exiteId = true;
            }
            return exiteId;
        });

        if(exiteId){
            callback(arrayAuxiliar);
        }else{
            callback([...arrayAuxiliar,id]);
        }
    }

    if(indisponivel){
        return(
            <p className='bolinha assento-indisponivel'>{numero}</p>
        )
    }else if(selecionado){
        return (
            <p className='bolinha assento-selecionado' onClick={()=>{selecionar()}}>{numero}</p>
        )
    }else{
        return(
            <p className='bolinha'  onClick={()=>{selecionar()}}>{numero}</p>
    
        )
    }
    
    
}