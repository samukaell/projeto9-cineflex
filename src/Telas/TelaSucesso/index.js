import Main from "./Main";

export default function TelaSucesso(props){

    const {nomeFilme,data,hora,nomeComprador,cpfComprador,assentos} = props

    return (
        <div className="TelaSucesso">
            <Main
                nomeFilme = {nomeFilme}
                data = {data}
                hora = {hora}
                nomeComprador = {nomeComprador}
                cpfComprador = {cpfComprador}
                assentos = {assentos}
            />
        </div>
    );
}