import { BrowserRouter, Routes, Route } from "react-router-dom";


import TelaFilme from "../Telas/TelaFilme";
import TelaInicio from "../Telas/TelaInicio";
import TelaSessao from "../Telas/TelaSessao";

import Header from "./Header"

export default function App(){
    return (
        <div className="App">
      
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<TelaInicio />}/>
                    <Route path="/filme/:idFilme" element={<TelaFilme/>}/>
                    <Route path="/sessao/:idSessao" element={<TelaSessao/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}