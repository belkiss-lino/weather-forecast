import { useState } from "react";
import { ButtonSearch, InputCity, Title, WrapperForecast, WrapperInfo, WrapperSearch } from "./style";
import { FcSearch }  from 'react-icons/fc';
import { TiLocation } from 'react-icons/ti';

function Input () {
    const [city, setCity] = useState("")
    const [weatherForecast, setWeatherForecast] = useState(null)

    const handleChange = (e) => {
        setCity(e.target.value)
    };

    const handleSearch = () => {
        fetch(
            `http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`
        )
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then((data) => {
            setWeatherForecast(data)
        })
    }

    return (
        <div>
            <Title>
                <h1>Previsão do tempo</h1>
            </Title>
            <WrapperSearch>
                <InputCity 
                    type="text" 
                    onChange={handleChange}
                    value={city}
                />
                <ButtonSearch onClick={handleSearch}>
                    <FcSearch size={20}/>
                </ButtonSearch>  

            </WrapperSearch>
            <div>
                { 
                    weatherForecast ? (
                    <WrapperForecast>
                        <div>
                            <div>
                               <img src={weatherForecast.current.condition.icon} />
                                <p>{weatherForecast.current.temp_c}º </p> 
                            </div>
                            <div>
                                <TiLocation size={35}/>
                                <p>{weatherForecast.location.name}, {weatherForecast.location.region}</p>
                            </div>
                        </div>

                        <div> 
                            {weatherForecast.current.condition.text}
                        </div>

                        <WrapperInfo>
                            <p>Sensação térmica: {weatherForecast.current.feelslike_c}º</p>
                            <p>Umidade: {weatherForecast.current.humidity}</p>
                            <p>Índice UV: {weatherForecast.current.uv}</p>
                        </WrapperInfo>
                    </WrapperForecast>
                    
                        
                ) : null }
            </div>
        </div>


        
    )
}

export default Input;