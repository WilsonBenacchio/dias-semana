import './Card.css';

function Card(props) {
    return (
        <div className="card">
            <img src={`http://openweathermap.org/img/wn/${props.icone}@2x.png`} alt="Ícone do clima" />
            <h3>{props.cidade}</h3>
            <h1>{props.temperatura}°C</h1>
            <p>{props.descricao}</p>
        </div>
    );
}

export default Card;
