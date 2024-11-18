import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';

import { styles } from '../ListCity/style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import Ionicons from '@expo/vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Api } from '../../../src/config/api';
import Input from '../../components/Input';
import List from '../../components/List';
import Header from '../../components/Header';


export default function ListCity() {
    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");
    const [ storegeCity , setStoregeCity ] = useState([]);
    const [ weatherCity , setWeatherCity ] = useState([]);


/*=============================================== FUNÇÕES ===============================================*/


//função para armazenar no AsyncStorage
const storegeData = async () => {
    try {
        await AsyncStorage.setItem ("@previsao_do_tempo_cities", JSON.stringify(storegeCity))
        console.log("armazenado com sucesso!")
    }
    catch (error){
        console.error("Não foi adicionado", error)
    }
}

//função para remove no AsyncStorage
const removeStorege = async() => {
    try {
        await AsyncStorage.clear ()
        setWeatherCity([])
        setStoregeCity([])
        console.log("removido  com sucesso!")
    }
    catch (error){
        console.error("Não foi adicionado", error)
    }
}

useEffect(() => {
    //removeStorege()
    storegeData()
    getStorageData()
    console.log(weatherCity)
}, [storegeCity]);


//função que recupera o que foi armazenado no AsyncStorage
const getStorageData = async () => {
    try {
        await AsyncStorage.getItem ("@previsao_do_tempo_cities")
        .then(cities => {
        const cityData = cities ? JSON.parse(cities) : []
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

// função para criar o renderItem
const renderItem =({item}) => (
    <List
            city={item.city}
            temp={item.temp}
            onRemovePress={handleRemovePress}
        />
)


// Função para buscar dados climáticos e atualizar weatherData
const fetchWeather = async () => {
    const data = await Api(city);
    setWeatherData(data);
};

useEffect(() => {
    if (city) fetchWeather();
}, [city]);





// Função para remover a cidade
const handleRemovePress = () => {
    Alert.alert(
        "Confirmação",
        "Deseja realmente excluir essa cidade?",
        [
            {
                text: "Não",
                onPress: () => console.log("Cancelado"),
                style: "cancel" // Este estilo diferencia o botão "Não"
            },
            {
                text: "Sim",
                onPress: () => {
                    // Lógica para remover a cidade
                    console.log("Cidade removida");
                    // Aqui vai a função para realmente remover a cidade
                }
            }
        ],
        { cancelable: true }
        //Permite que o usuário feche o alerta ao tocar fora dele, se necessário.
    );
};







/*=============================================== FIM UNÇÕES ===============================================*/    
   

return ( 
    <View style={styles.container}>
    
    <Header />

    {/* INPUT E BOTÃO LUPA */}
        <Input
            Titulo="Adicione um local..."
            onChangeText={(text) => setSearch(text)} // Atualiza a pesquisa
            onPress={() => setStoregeCity(city => [...city, search])} // Define city com o valor de pesquisa ao pressionar
        />

    {/* LISTA COM DADOS CLIMÁTICOS */}
        
        
        <FlatList
            data={weatherCity}
            keyExtractor={item => item.city}
            horizontal= {false}
            renderItem={renderItem}
        />
        

    

  
    

    </View>
    )

}