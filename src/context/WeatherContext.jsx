import { createContext, useState, useContext, useEffect, Children } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Api } from "../config/api";

//criando o contexto
const WeatherContext = createContext()
//função do contexto - provedor (provider)
export const WeatherProvider = ({children}) => {
   const [weatherCity, setWeatherCity] = useState([])
   

{/* 
//função que recupera e atualiza o estado que foi armazenado no AsyncStorage
const getStorageData = async () => {
    try {
        await AsyncStorage.getItem ("@previsao_do_tempo_cities")
        .then(cities => {
        const cityData = cities ? JSON.parse(cities) : [];
        const dataArray = []
        cityData.forEach(city => {
            Api(city)
            .then(data =>{
                dataArray.push({
                    temp:data.main.temp,
                    description: data.weather[0].description,
                    city: city
                })
                if (dataArray.length === cityData.length) {
                    setWeatherCity(dataArray) 
                }
            })
        });
        })
    }
    catch (error){
        console.error("Não foi adicionado", error)
    }
} 
*/}

const getStorageData = async () => {
    try {
        const cities = await AsyncStorage.getItem("@previsao_do_tempo_cities");
        const cityData = cities ? JSON.parse(cities) : [];
        const dataArray = await Promise.all(
            cityData.map(async (city) => {
                const data = await Api(city);
                return {
                    temp: data.main.temp,
                    description: data.weather[0].description,
                    city,
                };
            })
        );
        setWeatherCity(dataArray);
    } catch (error) {
        console.error("Erro ao recuperar dados:", error);
    }
};


{/* 
//função para adicionar no AsyncStorage
const addCity = async (NewCity) => {
    try {
        // aqui está pegando o que está no asynscStorage e está armazenando na cosntante (cities)
        const cities = await AsyncStorage.getItem ("@previsao_do_tempo_cities")
        //operador ternario (forma mais curta de fazer uma condição)
        const cityData = cities ? JSON.parse(cities) : {}
        // aqui recupero a cidade armazenada existente e acrescento nova cidade
        const upDateCity = [...cityData, NewCity ]
        await AsyncStorage.setItem("@previsao_do_tempo_cities", JSON.stringify(upDateCity))
        await getStorageData()

    }
    catch (error){
        console.error("Não foi adicionado", error)
    }
}
*/}

const addCity = async (NewCity) => {
    try {
        // Validação: Verifica se a cidade é válida
        if (
            !NewCity || // Verifica se está vazio
            typeof NewCity !== "string" || // Verifica se não é uma string
            !isNaN(Number(NewCity.trim())) // Verifica se é um número (mesmo em formato de string)
        ) {
            console.error("Cidade inválida.");
            return; // Para a execução se o valor for inválido
        }

        // Recupera a lista de cidades armazenada no AsyncStorage
        const cities = await AsyncStorage.getItem("@previsao_do_tempo_cities");
        const cityData = cities ? JSON.parse(cities) : [];

        // Verifica se a cidade já existe na lista
        if (cityData.includes(NewCity)) {
            console.log("Cidade já está na lista.");
            return; // Não adiciona cidades duplicadas
        }

        // Adiciona a nova cidade à lista
        const updatedCities = [...cityData, NewCity];
        await AsyncStorage.setItem("@previsao_do_tempo_cities", JSON.stringify(updatedCities));

        // Atualiza o estado chamando `getStorageData`
        await getStorageData();
    } catch (error) {
        console.error("Erro ao adicionar cidade:", error);
    }
};

useEffect(() =>{
    getStorageData() // Chama a função para carregar os dados iniciais
}), []; // Executa apenas ao montar o componente.




return(
    <WeatherContext.Provider value={{weatherCity, addCity }}>
        { children }
    </WeatherContext.Provider>
)
}

//export const useWeather = () => {useContext(WeatherContext)}
export const useWeather = () => useContext(WeatherContext);
