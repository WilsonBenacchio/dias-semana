import { useState, useEffect } from 'react';

import './App.css';
import Dia from './Componentes/Dia';
import Semana from './Componentes/Semana';
import Topo from './Componentes/Topo';

function App() {
  const [cidade, setCidade] = useState('São Paulo');
  const [temperatura, setTemperatura] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [icone, setIcone] = useState(null);
  const [previsao, setPrevisao] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`);
        const weatherData = await weatherResponse.json();
        setTemperatura(Math.round(weatherData.main.temp));
        setDescricao(weatherData.weather[0].description);
        setIcone(weatherData.weather[0].icon);

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`);
        const forecastData = await forecastResponse.json();
        const forecastArray = forecastData.list.filter((_, index) => index % 8 === 2);
        setPrevisao(forecastArray);
      } catch (erro) {
        console.error(erro);
      }
    };

    fetchWeatherData();
  }, [cidade]);

  return (
    <div className="App">
      <Topo pegarCidade={setCidade} />
      <Dia municipio={cidade} temp={temperatura} desc={descricao} icon={icone} />
      <Semana diasTemp={previsao} />
    </div>
  );
}

export default App;
