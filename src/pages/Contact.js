import { Link } from 'react-router-dom';

function Contact(){
    return(
        <div>
            <label for="name">Qual seu nome?</label>
            <input type="text" id="name"></input>

            <label for="mail">Qual seu e-mail?</label>
            <input type="text" id="mail"></input>

            <label for="coment">Qual sua sugestão ou dúvida?</label>
            <input type="text" id="coment"></input>

            <button><Link to="/">Enviar</Link></button>
        </div>
    )
}

export default Contact;