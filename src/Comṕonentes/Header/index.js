import { Link } from 'react-router-dom';
import './styles.css'

export default function Header(){
    return(
        <div className="Header">
            <Link to="/"> 
                <h1>CINEFLEX</h1>
            </Link> 
        </div>
    );
}