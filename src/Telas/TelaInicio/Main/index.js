 import CarregarFilmes from '../CarregarFilmes'

 import './styles.css'
 
 export default function Main(){
     return(
        <div className="Main">
            <div className="filme-selecionado">
                <p>Selecione o filme</p>
            </div>
            <div className="container-filmes">
                    <CarregarFilmes/>
            </div>
        </div>
     );
 }