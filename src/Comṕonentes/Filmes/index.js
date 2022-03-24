import './styles.css'

export default function Filmes(props){
    return(
        <div className='Filmes'>
            <img src={props.imagem} alt={props.alt}/>
        </div>
    );
}