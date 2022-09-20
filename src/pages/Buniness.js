import { Link } from 'react-router-dom';

function Business(){
    return(
        <div>
            <h1>Sobre a empresa</h1>
            <p>A empresa X está presente no mercado desde 1950, prestando serviços de tecnologia para melhorar o mundo.</p>

            <button><Link to="/">Voltar a tela inicial</Link></button>    
        </div>
    )
}

export default Business;