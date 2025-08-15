import Previsao from "../components/Previsao";

export class Tempo {
    constructor(dadosAPI){
        this.temperatura = dadosAPI.main.temp;
        this.descricao = dadosAPI.weather[0].description;
        this.icone = dadosAPI.weather[0].icon;
        this.velocidadeVento = dadosAPI.wind.speed;
        this.cidade = dadosAPI.name;
        this.pais = dadosAPI.sys.country;
    }

    getTemperatura() {
        return `${this.temperatura}°C`;
    }

    getDescricao() {
        const traducoes = {
            'clear sky': 'céu limpo',
            'few clouds': 'poucas nuvens',
            'scattered clouds': 'nuvens dispersas',
            'broken clouds': 'nublado',
            'shower rain': 'chuva passageira',
            'rain': 'chuva',
            'thunderstorm': 'tempestade',
            'snow': 'neve',
            'mist': 'névoa'
            };
        return traducoes[this.descricao] || this.descricao;
    }

    getIconeURL() {
        return `https://openweathermap.org/img/wn/${this.icone}@2x.png`;
    }
}

export const getPrevisaoDoTempo = async (cidade) => {
    try {
        const geocodingUrl = `https://nominatim.openstreetmap.org/search?q=${cidade}&format=json&limit=1`;
        const geoResponse = await axios.get(geocodingUrl);

        if (geoResponse.data.length === 0) return;
        
        const { lat, lon } = geoResponse.data[0];

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weathercode&current_weather=true&forecast_days=1`;
        const weatherResponse = await axios.get(weatherUrl);

        const prev = new Previsao(weatherResponse);

        return prev;
    } catch (error) {
        console.error('Ocorreu um erro:', error.message);
        if (error.response) {
            console.error('Detalhes do erro da API:', error.response.data);
        }
    }
}