import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";


import TelaFilme from "../Telas/TelaFilme";
import TelaInicio from "../Telas/TelaInicio";
import TelaSessao from "../Telas/TelaSessao";
import TelaSucesso from "../Telas/TelaSucesso";

import Header from "./Header"

export default function App(){

    //Estados
    const [nomeFilme,setNomeFilme] = useState("");
    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");
    const [listaAssentos,setListaAssentos] = useState([]);


    return (
        <div className="App">
      
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<TelaInicio />}/>
                    <Route path="/filme/:idFilme" element={
                        <TelaFilme
                            callback = {setNomeFilme}
                        />}/>
                    <Route path="/sessao/:idSessao" element={
                        <TelaSessao
                            assentoSelecionado = {listaAssentos}
                            setAssentoSelecionado = {setListaAssentos}

                            callbackNome = {setNomeComprador}
                            callbackCpf = {setCpfComprador}
                        />}/>
                    <Route path="/sucesso" element={
                        <TelaSucesso
                            nomeFilme = {nomeFilme}
                            nomeComprador = {nomeComprador}
                            cpfComprador = {cpfComprador}
                            assentos = {listaAssentos}
                            setListaAssentos = {setListaAssentos}
                        />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}