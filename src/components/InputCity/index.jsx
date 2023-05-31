import { useState } from "react";
import { ButtonSearch, InputCity, WrapperSearch } from "./style";

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
            <WrapperSearch>
                <InputCity 
                    type="text" 
                    onChange={handleChange}
                    value={city}
                />
                <ButtonSearch onClick={handleSearch}>Pesquisar</ButtonSearch>  

        
            </WrapperSearch>
                <div>
                { 
                    weatherForecast ? (
                        <div>
                        <div style={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',
                            alignItems: 'center' }}>
                            <img src={weatherForecast.current.condition.icon} />
                            {weatherForecast.current.temp_c}º
                            
                        </div>
                        <div> 
                        Hoje o dia está: {weatherForecast.current.condition.text} em {weatherForecast.location.name}
                    </div>
                    </div>
                        


                ) : null }
                </div>
            </div>


        
    )
}

export default Input;