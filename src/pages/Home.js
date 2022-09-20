import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Bem-vindo a empresa X</h1>
            <button><Link to="/empresa">Saiba mais sobre a empresa</Link></button>            
            <button><Link to="/contato">Envie uma sugestão</Link></button>            
        </div>
    )
}

export default Home;