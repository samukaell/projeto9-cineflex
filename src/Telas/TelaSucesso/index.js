import Main from "./Main";

export default function TelaSucesso(props){

    const {nomeFilme,data,hora,nomeComprador,cpfComprador,assentos,setListaAssentos} = props

    return (
        <div className="TelaSucesso">
            <Main
                nomeFilme = {nomeFilme}
                data = {data}
                hora = {hora}
                nomeComprador = {nomeComprador}
                cpfComprador = {cpfComprador}
                assentos = {assentos}
                setListaAssentos = {setListaAssentos}
            />
        </div>
    );
}