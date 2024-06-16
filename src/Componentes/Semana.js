import Card from "./Card";
import './Semana.css';

function Semana(props) {
    const diasSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];

    return (
        <div className='diariamente'>
            <h2>Diariamente</h2>
            <div className='temperatura-semana'>
                {props.diasTemp.map((dado, index) => (
                    <Card 
                        key={index}
                        cidade={diasSemana[new Date(dado.dt_txt).getDay()]} 
                        temperatura={Math.round(dado.main.temp)} 
                        descricao={dado.weather[0].description} 
                        icone={dado.weather[0].icon} 
                    />
                ))}
            </div>
        </div>  
    );
}

export default Semana;
