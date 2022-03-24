import App from './Comṕonentes/App'
import ReactDOM from 'react-dom';

import './reset.css'
import './styles.css'

function Index() {
    return (
        <App/>
    )
}


ReactDOM.render(<Index/>, document.querySelector(".root"));