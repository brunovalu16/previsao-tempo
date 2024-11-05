import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../ListCity/style';
import { useState, useEffect } from 'react'; //serve para analizar o comportamento e renderizar na tela
import Ionicons from '@expo/vector-icons/Ionicons'
import { Api } from '../../../src/config/api';

import Input from '../../components/Input';
import List from '../../components/List';


export default function ListCity() {
    
    //aqui eu uso useState - city é o State e setCity é a mecanica dela "set" dela 
    const [city, setCity] = useState("Goiânia");
    const [ weatherData, setWeatherData] = useState(null);
    const [ search, setSearch ] = useState("");


/*=============================================== FUNÇÕES ===============================================*/


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
    Alert.alert("Deseja realmente excluir essa cidade?");
    
}








/*=============================================== FIM UNÇÕES ===============================================*/    
   

return ( 
    <View style={styles.container}>
    
    {/* LOGO SKY TRACKER */}
        <Image
            source={require("../../assets/img/logo-skyTracker.png")}
            style={styles.img}
        />

    {/* INPUT E BOTÃO LUPA */}
        <Input
            Titulo="Adicione um local..."
            onChangeText={(text) => setSearch(text)} // Atualiza a pesquisa
            onPress={() => setCity(search)} // Define city com o valor de pesquisa ao pressionar
        />

    {/* LISTA COM DADOS CLIMÁTICOS */}
        <List
            city={city}
            weatherData={weatherData}
            onRemovePress={handleRemovePress}
        />
    </View>
    )

}